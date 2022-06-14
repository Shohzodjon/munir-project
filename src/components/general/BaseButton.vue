<template>
  <button
    class="bg-[#2E2C2C] rounded-md text-[#fff] py-2 px-3"
    @click="$emit('onclick')"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
