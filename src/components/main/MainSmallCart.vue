<template>
  <!--   Kichkina qizil iconli cart uchun ishlatiladi 4 talik -->
  <div
    class="h-[70px] rounded-[10px] border border-[#fff8f8] bg-[#fff8f8] px-3 flex items-center justify-between gap-3 transition scale-1 ease-out duration-500 hover:border-[#f76969] hover:scale-105"
  >
    <div v-html="item.icon" class="text-[2rem] text-[#F54646]"></div>
    <h2 class="text-[#F54646] text-[14px] font-bold">{{ item.text }}</h2>
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
