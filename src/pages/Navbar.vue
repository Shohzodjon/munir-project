<script>
import { RouterLink } from "vue-router";
</script>
<template>
  <section
    class="navbar--section max-w-[1440px] mx-auto px-[124px] py-[16px] bg-[#fff] fixed top-0 left-0 right-0 z-50"
  >
    <div class="navbar--top flex items-center py-2 justify-between mb-2">
      <ul class="flex items-center gap-4 text-[#2E2C2C] text-[14px]">
        <li class="flex items-center gap-2 list">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="cursor-pointer"
          >
            <path
              d="M11.9609 1.0835C15.0451 1.426 17.4818 3.85933 17.8276 6.9435"
              stroke="#8492A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9609 4.03613C13.4368 4.3228 14.5901 5.47697 14.8776 6.9528"
              stroke="#8492A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.19228 9.39382C12.5164 12.7171 13.2705 8.87243 15.3871 10.9875C17.4275 13.0275 18.6012 13.4362 16.015 16.0208C15.6912 16.281 13.6337 19.412 6.40307 12.1832C-0.82849 4.9535 2.30065 2.89387 2.56097 2.57012C5.15249 -0.0216324 5.55503 1.15798 7.59551 3.19794C9.71112 5.31391 5.86813 6.07051 9.19228 9.39382Z"
              stroke="#8492A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <a href="tel:+998 71 200 70 07" class="font-semibold"
            >+998 71 200 70 07</a
          >
        </li>
        <li>
          <a href="#">Qog‘oz kitoblar</a>
        </li>
        <li><a href="#">Elektron kitoblar</a></li>
        <li><a href="#">Audiokitoblar</a></li>
        <li><a href="#">Bloglar</a></li>
        <li><a href="#">Hamkorlik</a></li>
        <li><a href="#">Kontaktlar</a></li>
      </ul>
      <div class="flex items-center gap-4">
        <button
          class="text-[13px] font-semibold leading-4 hover:text-[#F54646]"
        >
          <RouterLink to="/login"> Kirish </RouterLink>
        </button>
        <button
          class="w-[147px] h-[32px] bg-[#2E2C2C] rounded-md text-[#fff] text-[13px] font-semibold"
        >
          <RouterLink to="/login"><span> Ro‘yxatdan o‘tish</span></RouterLink>
        </button>
      </div>
    </div>
    <hr />
    <!-- end of navbar top -->
    <!-- navbar bottom -->
    <div class="navbar--bottom flex items-center justify-between mt-5 mb-1">
      <div class="flex items-center gap-9">
        <RouterLink to="/">
          <span>
            <img
              src="@/static/imges/nav-logo.png"
              alt="nav-logo"
              class="w-[48px] h-[48px]"
            />
          </span>
        </RouterLink>
        <div
          class="w-[420px] h-[40px] rounded-md border border-black flex items-center overflow-hidden"
        >
          <select
            name="select"
            id="choose"
            class="w-[104px] h-9 bg-[#F7F8FA] text-[#8492A6] text-[13px] leading-[18px] px-1 outline-none rounded-4"
          >
            <option value="">Hikoyalar</option>
            <option value="">Romanlar</option>
            <option value="">Story</option>
            <option value="">Novels</option>
            <option value="">Books</option>
          </select>
          <input
            type="text"
            placeholder="Izlash"
            id="search"
            class="w-[260px] h-9 outline-none px-2 placeholder:text-[#CCD0D8] placeholder:text-[13px] placeholder:font-semibold"
            autocomplete="off"
          />
          <label
            for="search"
            class="w-[56px] h-10 bg-[#2E2C2C] flex items-center justify-center self-end rounded-r-md text-[#fff] cursor-pointer"
            ><i class="bi bi-search"></i>
          </label>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <span class="text-[#2E2C2C] text-[16px]"
          ><i class="bi bi-bookmark-fill"></i
        ></span>
        <button class="flex items-center gap-3 border rounded-md py-1 px-2">
          <span class="text-[16px]"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1451 11.8438L17.4476 16.0286C17.4468 16.0335 17.446 16.0383 17.4451 16.0431C17.3463 16.5865 16.8257 16.9469 16.2823 16.8481L4.91349 14.781C4.53888 14.7129 4.23545 14.438 4.13085 14.0719L2.30605 7.68508C2.28053 7.59574 2.26758 7.50328 2.26758 7.41036C2.26758 6.85807 2.71529 6.41036 3.26758 6.41036H16.9934L17.6066 3.78241C17.7312 3.24839 18.2073 2.87061 18.7557 2.87061H20.8205C21.4722 2.87061 22.0005 3.39887 22.0005 4.05052C22.0005 4.70217 21.4722 5.23044 20.8205 5.23044H19.692L18.1451 11.8438Z"
                fill="#2E2C2C"
              />
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 21C5.67157 21 5 20.3284 5 19.5C5 18.6716 5.67157 18 6.5 18C7.32843 18 8 18.6716 8 19.5C8 20.3284 7.32843 21 6.5 21ZM15.5 21C14.6716 21 14 20.3284 14 19.5C14 18.6716 14.6716 18 15.5 18C16.3284 18 17 18.6716 17 19.5C17 20.3284 16.3284 21 15.5 21Z"
                fill="#2E2C2C"
              />
            </svg>
          </span>
          <div class="flex flex-col justify-center">
            <p class="text-[14px] text-[#2E2C2C] font-semibold">Savatcha</p>
            <span class="text-[#4D5870] text-[10px]">Bo'sh</span>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list:hover svg path,
.list:hover a {
  stroke: #f54646;
  color: #f54646;
}
</style>
