<template>
  <div class="tag-component">
    <i v-if="props.isTag" class="icon-tags"></i>
    <i v-else class="icon-hashtag"></i>
    <span v-html="props.name"></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isTag: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped lang="scss">
.tag-component {
  background-color: $chad;
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 10px;
  user-select: none;
  line-height: 2;
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
