<template>
  <div class="flex items-center justify-between my-6">
    <h2 class="heading-text">{{ item.title }}</h2>
    <button
      class="rounded-md py-2 px-5 transition bg-[#FAFAFA] duration-500 ease-linear text-[#4D5870] font-semibold text-[14px] hover:bg-[#2E2C2C] hover:text-[#fff]"
    >
      {{ item.content }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
