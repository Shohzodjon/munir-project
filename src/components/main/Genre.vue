<template>
  <!--  Bu componentta janrlar uchun ishlatiladi  -->
  <div
    class="h-[36px] border py-[6px] px-2 bg-[#F8F8F8] rounded-md flex items-center gap-2 justify-between transition duration-500 ease-out border-[#E4E7EE] cursor-pointer hover:border-[#2E2C2C] hover:text-[#2E2C2C]"
  >
    <div>
      <img :src="item.url" alt="img" />
    </div>
    <h4 class="text-[12px] font-semibold text-[#4D5870]">
      {{ item.text }}
    </h4>
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
