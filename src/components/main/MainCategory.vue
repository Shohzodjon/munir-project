<template>
  <div class="w-full rounded-lg bg-[#fff] py-[30px] px-6">
    <div class="rounded-full w-[150px] h-[150px] mx-auto overflow-hidden mb-3">
      <img :src="url" alt="img" class="w-full h-full" />
    </div>
    <h2 class="text-xl text-main--color font-bold">{{ title }}</h2>
    <p class="text-second--color text-xs font-semibold my-2">{{ text }}</p>
    <button class="w-full p-2 bg-[#F8F8F8] rounded-lg text-left">
      <span class="text-second--color text-xs">{{ text1 }}</span>
      <h5 class="text-main--color text-lg font-bold">{{ text2 }}</h5>
    </button>
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
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    },
  },
};
</script>
<!-- 

url: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    },

 -->
