<template>
  <div v-ripple class="button-component" :class="props.type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'success'
  }
});
</script>

<style scoped lang="scss">
.button-component {
  padding: 2px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  color: $eerie;
  user-select: none;
  transition: 100ms;
  background-color: $problem;

  &:hover {
    opacity: 0.75;
  }

  &.success {
    background-color: $emerald;
  }

  &.danger {
    background-color: $imperial;
  }
}
</style>