<template>
  <div v-ripple class="button-component" :class="props.type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'info'
  }
});
</script>

<style scoped lang="scss">
.button-component {
  padding: 1px 10px;
  border-radius: 15px;
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

  &.info {
    background-color: $cubs;
    color: $problem;
  }
}
</style>