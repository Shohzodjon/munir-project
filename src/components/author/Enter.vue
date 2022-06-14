<template>
  <section :class="[isEnter ? 'active' : 'unactive']">
    <form>
      <div>
        <ul class="my-5">
          <li>
            <label for="telnumber" class="main-label">Telefon raqaningiz</label>
            <input
              type="text"
              v-maska="'+ (###) ##-###-##-##'"
              placeholder="+998"
              autocomplete="off"
              class="main-input"
              v-model="phone"
            />
            <span v-if="v$.phone.$error" class="text-[#F54646] text-xs">
              {{ v$.phone.$errors[0].$message }}
            </span>
          </li>
          <li class="my-[2rem]">
            <label for="password" class="main-label">Parol</label>
            <div
              class="bg-[#FAFAFA] border border-[#EDF0F5] rounded-md flex justify-between items-center px-2"
            >
              <input
                type="password"
                ref="showcode"
                placeholder="Parolingizni kiriting"
                class="main-password"
                autocomplete="off"
                v-model="password"
              />
              <span
                class="text-[16px] text-[#8492A6] cursor-pointer"
                @click="showCode"
                ><i class="bi bi-eye"></i
              ></span>
            </div>
            <span v-if="v$.password.$error" class="text-[#F54646] text-xs">
              {{ v$.password.$errors[0].$message }}
            </span>
          </li>
          <li>
            <BaseButton
              class="w-full transition duration-500 all hover:shadow-xl"
              @onclick="submit"
            >
              <span>Kirish</span>
            </BaseButton>
          </li>
          <li class="my-3 flex justify-center">
            <button
              class="text-[#F54646] text-[15px] font-semibold w-[140px] mx-auto cursor-pointer my-2"
            >
              Parolni tiklash
            </button>
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
import { required, minLength } from "@vuelidate/validators";

export default {
  components: {
    BaseButton,
  },

  data() {
    return {
      v$: useValidate(),
      phone: "",
      password: "",
      isShow: false,
    };
  },

  props: {
    isEnter: {
      type: Boolean,
    },
  },
  validations() {
    return {
      phone: { required },
      password: { required, minLength: minLength(6) },
    };
  },

  methods: {
    submit() {
      event.preventDefault();
      this.v$.$validate(); // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
      } else {
        alert("Form failed validation");
      }
    },

    showCode() {
      if (this.$refs.showcode.type === "text") {
        this.isShow = false;
        this.$refs.showcode.type = "password";
      } else {
        this.$refs.showcode.type = "text";
        this.isShow = true;
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
