<template>
  <div class="post-edit-component">
    <textarea placeholder="Content" class="content"></textarea>
    <div class="meta">
      <InputComponent v-model="reactions" placeholder="Reactions">
        <template #prepend-icon>
          <i class="icon-thumbs-up"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="comments" placeholder="Comments">
        <template #prepend-icon>
          <i class="icon-comment"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="shares" placeholder="Shares">
        <template #prepend-icon>
          <i class="icon-share"></i>
        </template>
      </InputComponent>
      <InputComponent v-model="created" placeholder="Created" type="datetime-local">
      </InputComponent>
    </div>
    <div class="tags">
      tagi
    </div>
    <div class="actions">
      <ButtonComponent class="ml-auto">Save</ButtonComponent>
      <ButtonComponent type="danger">Clear</ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const reactions = ref();
const comments = ref();
const shares = ref();
const created = ref();
</script>

<style lang="scss">
.post-edit-component {
  display: flex;
  flex-direction: column;
  background-color: $charcoal;
  color: $problem;
  border-radius: 15px;
  overflow: hidden;
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

    input {
      color: $problem;
    }
  }

  .tags {
  }

  .actions {
    background-color: $ivory;
  }
}
</style>
