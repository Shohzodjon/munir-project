<template>
  <!-- Yangiliklar uchun ishlatiladi  -->
  <div>
    <div class="news-wrapp">
      <div>
        <img :src="item.imgUrl" alt="img" />
      </div>
      <h2 class="news-head">{{ item.title }}</h2>
      <p class="text-[#4D5870] text-[13px] my-2">
        {{ item.text }}
      </p>
      <ul class="flex items-center gap-5">
        <li class="text-[#4D5870] text-3 font-semibold">
          <span class="inline-block mr-2"
            ><i class="bi bi-calendar-event"></i
          ></span>
          <span>{{ item.date }}</span>
        </li>
        <li class="text-[#4D5870] text-[12px] font-semibold">
          <span class="inline-block mr-2"><i class="bi bi-eye"></i></span>
          <span>{{ item.viewcount }}</span>
        </li>
      </ul>
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
<style scoped>
.news-head {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #2e2c2c;
  transition: 0.5s linear color;
}
.news-wrapp:hover .news-head {
  color: #f54646;
}
</style>
