<template>
  <div class="input-component">
    <slot name="prepend-icon"></slot>
    <input v-model="modelValue" ref="input" :type="props.type" :placeholder="props.placeholder" @input="updateWidth">
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const modelValue = defineModel();

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  }
});

const input = ref();

function updateWidth(): void {
  const length = input.value.value.length;
  const placeholderLength = input.value.placeholder.length;
  let freeSpaceWidth = 3;

  if (props.type === 'datetime-local') {
    freeSpaceWidth = 13;
  }

  if (length < placeholderLength) {
    input.value.style.width = `${placeholderLength + freeSpaceWidth}ch`

    return;
  }

  input.value.style.width = `${length + freeSpaceWidth}ch`
}

onMounted(() => {
  updateWidth();
})
</script>

<style scoped lang="scss">
.input-component {
  background-color: transparentize($problem, 0.9);
  border-radius: 5px;
  padding: 1px;

  input {
    outline: none;
    text-align: center;
  }
}
</style>