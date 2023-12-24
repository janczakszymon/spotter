<template>
  <div class="switch-component" @click="modelValue = !modelValue">
    <div class="circle" :class="modelValue ? 'on' : 'off'">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel();
</script>

<style scoped lang="scss">
.switch-component {
  position: relative;
  width: 50px;
  height: 25px;
  background-color: transparentize($black, 0.25);
  display: flex;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;

  .circle {
    width: 25px;
    height: 25px;
    background-color: #313866;
    border-radius: 15px;
    position: absolute;
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &.on {
      translate: 100%;
    }

    &.off {
      //opacity: 0.35;
      translate: 0;
    }
  }
}
</style>