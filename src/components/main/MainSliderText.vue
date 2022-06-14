<template>
  <div class="basis-1/2">
    <h2 class="text-main--color text-[34px] leading-10 font-bold">
      {{ item.title }}
    </h2>
    <p class="text-second--color text-base my-2">{{ item.parag }}</p>
    <BaseButton class="w-[164px]">
      <span>{{ item.text }}</span>
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from "../general/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
