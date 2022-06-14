<template>
  <section class="my-[15rem]">
    <div
      v-if="!isVerification"
      class="w-[45%] mx-auto px-[5%] py-3 bg-[#fff] rounded-xl"
    >
      <h2 class="heading-text text-center my-3">Munir’ga xush kelibsiz!</h2>
      <div
        class="w-full bg-[#F5F5F5] flex items-center justify-between rounded-md my-4 p-1"
      >
        <button
          :class="[isEnter ? 'active-btn enter-btn ' : 'enter-btn']"
          @click="enterClick"
        >
          Kirish
        </button>
        <button
          :class="[isEttempt ? 'active-btn enter-btn' : 'enter-btn']"
          @click="ettemptClick"
        >
          Azo bolish
        </button>
      </div>
      <Enter :isEnter="isEnter" />
      <Attempt @varification="varification" :isEttempt="isEttempt" />
      <SocialMedia />
    </div>
    <div v-else>
      <VerificationPage :userNumber="userNumber" />
    </div>

    <!-- <component :is="selectedComp"></component> -->
  </section>
</template>
<script>
import Attempt from "./Attempt.vue";
import Enter from "./Enter.vue";
import SocialMedia from "./SocialMedia.vue";
import VerificationPage from "./VerificationPage.vue";
export default {
  components: {
    Attempt,
    Enter,
    SocialMedia,
    VerificationPage,
  },
  data() {
    return {
      isEnter: true,
      isEttempt: false,
      isVerification: false,
      userNumber: "",
    };
  },
  methods: {
    varification(number) {
      this.isVerification = true;
      console.log(number);
      this.userNumber = number;
    },
    enterClick() {
      this.isEnter = true;
      this.isEttempt = false;
    },
    ettemptClick() {
      this.isEnter = false;
      this.isEttempt = true;
    },
  },
};
</script>
<style>
.enter-btn {
  height: 32px;
  color: #2e2c2c;
  font-size: 15px;
  background: inherit;
  width: 49%;
  border-radius: 4px;
  font-weight: 600;
}
.active-btn {
  background: #fff;
}
</style>
