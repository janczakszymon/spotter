<template>
  <div class="add-tag-component" :class="{'closed': !isOptionsVisible}">
    <div>
      <SwitchComponent v-model="isTag">
        <template #icon>
          <i v-if="!isTag" class="icon-hashtag text-body-1"></i>
          <i v-else class="icon-tags text-body-1"></i>
        </template>
      </SwitchComponent>
    </div>
    <InputComponent v-model="selectedTag" ref="input"
        placeholder="Dodaj tag"
                    class="input mx-auto"
                    @focusin="showOptions"
                    @focusout="hideOptions"
    ></InputComponent>
    <ButtonComponent @click="addTag">dodaj</ButtonComponent>
    <div class="available-options" :class="{'hidden': !isOptionsVisible}">
      <div v-for="(option, key) in postStore.availableTags"
           :key="key" class="option"
           @mousedown="setTagName(option.name)"
      >
        <i v-if="option.isTag" class="icon-tags"></i>
        <i v-else class="icon-hashtag"></i>
        {{option.name}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {usePostStore} from "~/store/PostStore";
import {ref} from "vue";

const postStore = usePostStore();
const isOptionsVisible = ref(false);
const selectedTag = ref("");
const isTag = ref(false);
const input = ref();

function showOptions(): void
{
  isOptionsVisible.value = true;
}

function hideOptions(): void
{
  isOptionsVisible.value = false;
  input.value.updateWidth();
}

function setTagName(name: string): void
{
  selectedTag.value = name;
}

function addTag(): void
{
  const tags = postStore.post.tags;
  const tagIndex = tags.findIndex( (x) => x.name === selectedTag.value);

  console.log(tagIndex)

  if (!selectedTag.value.length || tagIndex >= 0) {
    return;
  }

  postStore.post.tags.push({
    name: selectedTag.value,
    isTag: isTag.value,
    id: null
  });

  selectedTag.value = "";
}
</script>

<style lang="scss">
.add-tag-component {
  background-color: $chad;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 15px 15px 0 0;
  user-select: none;
  line-height: 2;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  //width: 150px;

  &.closed {
    border-radius: 15px;
  }

  &.hashtag {
    opacity: 0.5;
  }

  .input-component {
    border: none !important;
    //width: 100%;

    input {
      color: white;
      //width: 100% !important;
    }
  }

  .available-options {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: $blueberry;
    text-align: center;
    border-radius: 0 0 10px 10px;

    &.hidden {
      display: none;
    }

    .option {
      padding: 1px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      &:nth-child(2n) {
        background-color: transparentize($brown, 0.5);
      }
    }
  }
}
</style>
