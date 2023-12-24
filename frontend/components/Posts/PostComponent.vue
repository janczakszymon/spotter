<template>
  <div class="post-component">
    <div v-text="props.content" class="content"></div>
    <div class="meta">
      <div><i class="icon-comment"></i><span>100</span></div>
      <div><i class="icon-thumbs-up"></i><span>55</span></div>
      <div><i class="icon-share"></i><span>11</span></div>
      <div><i class="icon-calendar"></i><span>12.11.2023 12:16</span></div>
      <div><i class="icon-link-ext"></i><NuxtLink href="#" target="_blank" external>View post</NuxtLink></div>
    </div>
    <div class="tags-list">
      <TagComponent :is-tag="false" name="Spotter"></TagComponent>
      <TagComponent :is-tag="false" name="Praca"></TagComponent>
      <TagComponent name="Oddam"></TagComponent>
      <TagComponent name="Szukam"></TagComponent>
      <TagComponent name="Zgubiłem"></TagComponent>
      <TagComponent name="Mechanika"></TagComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagComponent from "~/components/Posts/TagComponent.vue";

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});

</script>

<style scoped lang="scss">
.post-component {
  display: flex;
  flex-direction: column;
  background-color: $charcoal;
  color: $problem;
  border-radius: 15px;
  overflow: hidden;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;

    &:nth-child(2n) {
      background-color: transparentize($chad, 0.65);
    }

    a {
      color: $problem;
    }
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    margin-top: auto;

    & > div {
      background-color: transparentize($chad, 0.5);
      padding: 2px 9px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
