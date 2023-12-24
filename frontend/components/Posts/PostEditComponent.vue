<template>
  <div class="post-edit-component">
    <textarea v-model="postStore.post.content" placeholder="Content" class="content"></textarea>
    <div class="meta">
      <InputComponent v-model="postStore.post.reactions" placeholder="Reactions">
        <template #prepend-icon>
          <i class="icon-thumbs-up"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="postStore.post.comments" placeholder="Comments">
        <template #prepend-icon>
          <i class="icon-comment"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="postStore.post.shares" placeholder="Shares">
        <template #prepend-icon>
          <i class="icon-share"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="postStore.post.created" placeholder="Created" type="datetime-local">
      </InputComponent>
    </div>
    <div class="tags">
      <AddTagComponent></AddTagComponent>
      <div v-for="(tag, key) in postStore.post.tags"
           :key="key" class="tag">
        <TagComponent
                      :name="tag.name"
                      :is-tag="tag.isTag">

        </TagComponent>
        <ButtonComponent type="danger" @click="deleteTag(tag.name)">X</ButtonComponent>
      </div>
    </div>
    <div class="actions">
      <ButtonComponent type="success" class="ml-auto">Save</ButtonComponent>
      <ButtonComponent type="danger" @click="postStore.clearPostData()">Clear</ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePostStore} from "~/store/PostStore";
import TagComponent from "~/components/Posts/TagComponent.vue";
import AddTagComponent from "~/components/Posts/AddTagComponent.vue";

const postStore = usePostStore();

function deleteTag(name: string): void
{
  const tags = postStore.post.tags;
  const tagIndex = tags.findIndex( (x) => x.name === name);
  tags.splice(tagIndex, 1);
}
</script>

<style lang="scss">
.post-edit-component {
  display: flex;
  flex-direction: column;
  background-color: $charcoal;
  color: $problem;
  height: 100%;

  & > * {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
  }

  .content {
    color: $problem;
    background-color: transparentize($problem, 0.975);
    border: none;
    outline: none;
    resize: none;
    height: 150px;
  }

  .meta {
    color: $problem;
    background-color: transparentize($chad, 0.65);
    display: flex;
    flex-wrap: wrap;

    input {
      color: $problem;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    .tag {
      border-radius: 15px;
      background-color: transparentize($chad, 0.5);
      display: flex;
      gap: 3px;
    }
  }

  .actions {
    background-color: $ivory;
  }
}
</style>
