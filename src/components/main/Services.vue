<template>
  <!--  Buyurtmani eltish xizmati -->
  <div class="p-[14px]">
    <div class="text-[#F54646] text-[50px] mb-3" v-html="item.icon"></div>
    <h3 class="text-[#2C2E3D] text-base font-bold">{{ item.title }}</h3>
    <p class="text-[#8492A6] text-xs font-semibold">{{ item.text }}</p>
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
