<template>
  <section>
    <div class="w-[45%] mx-auto px-[5%] py-3 bg-[#fff] rounded-xl">
      <div>
        <h1 class="heading-text text-center">
          Telefon raqamingizga kelgan kodni kiriting
        </h1>
        <p class="text-[#858D96] text-[12px] my-[20px] text-center">
          Kodni
          <span
            class="bg-[#FEF4F4] w-[134px] inline-block h-[24px] py-0.5 px-0.5 rounded text-[12px] text-[#2e2c2c]"
            >{{ userNumber }}</span
          ><span
            class="w-[20px] h-[20px] bg-[#FAB5B5] inline-block text-center rounded-[3px]"
            ><i class="bi bi-pencil-fill"></i
          ></span>
          raqamiga jonatildi
        </p>
        <ul class="flex items-center justify-around my-[50px]">
          <li>
            <input
              type="tel"
              pattern="[0-9]"
              maxlength="1"
              autofocus="true"
              class="input-very"
            />
          </li>
          <li>
            <input
              type="tel"
              pattern="[0-9]"
              maxlength="1"
              class="input-very"
            />
          </li>
          <li>
            <input
              type="tel"
              pattern="[0-9]"
              maxlength="1"
              class="input-very"
            />
          </li>
          <li>
            <input
              type="tel"
              pattern="[0-9]"
              maxlength="1"
              class="input-very"
            />
          </li>
          <li>
            <input
              type="tel"
              pattern="[0-9]"
              maxlength="1"
              class="input-very"
            />
          </li>
        </ul>
        <BaseButton class="w-full">
          <span>Tasdiqlash</span>
        </BaseButton>

        <p
          class="text-[#8492A6] text-[15px] font-semibold text-center my-[12px]"
        >
          Kodni qayta yuborish <span class="text-[#F54646]">1.28</span>
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import BaseButton from "../general/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    userNumber: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.input-very {
  width: 52px;
  height: 52px;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid #cecece;
  outline: none;
  text-align: center;
}
.input-very:focus {
  outline: 1px solid #006fff;
}
</style>
