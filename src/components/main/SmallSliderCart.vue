<template>
  <div class="rounded-xl relative overflow-hidden">
    <img :src="url" alt="img" class="w-full h-full" />
    <h4
      class="tex-xs font-semibold text-[#fff] absolute top-[50%] left-0 w-full text-center z-30"
    >
      {{ title }}
    </h4>
    <div class="absolute w-full h-full top-0 left-0 bg-[#a9afbb0e] z-10"></div>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<!-- @/static/imges/mainpage/main3.png -->
<!-- @/static/imges/news/new5.png -->
