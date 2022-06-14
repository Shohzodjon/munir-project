<template>
  <section :class="[isEttempt ? 'active' : 'unactive']">
    <form @submit.prevent="submit">
      <div>
        <ul class="my-5">
          <li>
            <label for="telnumber" class="main-label">F.I.Sh</label>
            <input
              type="text"
              placeholder="F.I.Sh"
              autocomplete="off"
              :class="[v$.userName.$error ? 'main-input error' : 'main-input']"
              v-model="userName"
            />
          </li>
          <li class="my-[2rem]">
            <label for="password" class="main-label">Telefon raqamingiz</label>

            <input
              type="text"
              v-maska="'+ (###) ##-###-##-##'"
              placeholder="+998"
              :class="[
                v$.phoneNumber.$error ? 'main-input error' : 'main-input',
              ]"
              autocomplete="off"
              v-model="phoneNumber"
            />
          </li>
          <li>
            <BaseButton
              class="w-full transition duration-500 all hover:shadow-xl"
            >
              <span>Azo bolish</span>
            </BaseButton>
          </li>

          <li class="my-[2rem]">
            <div class="flex-center-between">
              <div class="h-3 flex items-center">
                <div class="w-[160px] h-[2px] bg-[#F1F3F8]"></div>
              </div>
              <p class="text-[#CECECE] text-[15px] font-semibold">yoki</p>
              <div class="h-3 flex items-center">
                <div class="w-[160px] h-[2px] bg-[#F1F3F8]"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </section>
</template>
<script>
import BaseButton from "../general/BaseButton.vue";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  components: {
    BaseButton,
  },
  props: {
    isEttempt: {
      type: Boolean,
    },
  },
  data() {
    return {
      v$: useValidate(),
      userName: "",
      phoneNumber: "",
    };
  },
  validations() {
    return {
      userName: { required },
      phoneNumber: { required },
    };
  },
  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$emit("varification", this.phoneNumber);
      }
    },
  },
};
</script>

<style scoped>
.active {
  display: block;
}
.unactive {
  display: none;
}
.main-input {
  background: #fafafa;
  height: 40px;
  padding: 0 8px;
  border-radius: 6px;
  width: 100%;
  font-size: 13px;
  color: #2e2c2c;
  border: 1px solid #edf0f5;
  outline: none;
}

.error {
  border: 1px solid crimson;
}
.main-password {
  height: 40px;
  padding: 0 8px;
  border-radius: 6px;
  width: 80%;
  font-size: 13px;
  outline: none;
  background: inherit;
  color: #2e2c2c;
}
.main-input::placeholder,
.main-password::placeholder {
  color: #ced3e2;
}

.main-label {
  color: #858d96;
  font-size: 13px;
  display: block;
  margin: 8px;
  font-weight: 600;
}
</style>
