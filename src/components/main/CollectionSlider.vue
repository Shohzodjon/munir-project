<template>
  <div>
    <div
      class="border border-[#f6f6f7] pt-10 py-6 pb-6 px-3 rounded-lg transition duration-500 ease-out hover:shadow-lg relative"
    >
      <div class="flex items-center gap-2 absolute top-[-40px] left-2">
        <img :src="item.url1" alt="img" class="h-[120px]" />
        <img :src="item.url2" alt="img" class="h-[120px]" />
        <img :src="item.url3" alt="img" class="h-[120px]" />
      </div>
      <div class="pt-10">
        <h4 class="text-lg text-main--color font-bold">{{ item.title }}</h4>
        <p class="text-xs text-second--color font-normal">{{ item.text1 }}</p>
        <h2 class="heading-text text-xl">{{ item.text2 }}</h2>
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
