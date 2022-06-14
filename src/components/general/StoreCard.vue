<template>
  <div
    class="news--flex bg-[#fff] w-full h-[257px] border border-[#c5a0fa] rounded-lg px-10 py-8 flex justify-between items-center mb-10 mt-[4rem]"
  >
    <div class="basis-1/2">
      <h3 class="heading-text">
        {{ item.storeTitle }}
      </h3>
      <p class="text-[#8492A6] text-[14px] font-semibold">
        {{ item.storeText }}
      </p>
    </div>
    <div class="basis-1/2 relative h-full">
      <img
        :src="item.url"
        alt="img"
        class="w-[400px] absolute bottom-[-30px] left-10"
      />
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
