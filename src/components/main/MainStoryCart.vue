<template>
  <!--   Hikoya tasnifini ifadalovchi componenta narxi va boshqalarini  -->
  <div class="flex items-center gap-3">
    <div class="rounded relative">
      <img :src="item.url" alt="img" class="h-[165px] w-[120px]" />
      <slot></slot>
    </div>
    <div class="w-[50%]">
      <h4 class="text-[16px] font-bold break-words">{{ item.storyName }}</h4>
      <p class="text-[#4D587] text-[12px] my-[3px] font-normal">
        {{ item.author }}
      </p>
      <span class="block h-[1px] bg-[#E4E7EE] w-full my-1"></span>
      <h3 class="text-[16px] font-bold">{{ item.price }}</h3>
      <div>
        <span class="text-[#F89046] text-[11px]"
          ><i class="fa-solid fa-star"></i></span
        ><span class="text-[11px] font-normal inline-block ml-1">{{
          item.grade
        }}</span>
      </div>
    </div>
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
