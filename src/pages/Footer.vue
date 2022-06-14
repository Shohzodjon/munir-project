<script></script>

<template>
  <footer class="max-w-[1440px] mx-auto px-[124px] py-[16px] mt-[8rem]">
    <div class="w-[62px] h-[62px] mx-auto">
      <RouterLink to="/">
        <img src="@/static/imges/nav-logo.png" alt="nav-logo" />
      </RouterLink>
    </div>

    <!-- footer list -->

    <div class="flex items-center justify-between">
      <div class="footer--list flex items-start gap-6 justify-between">
        <ul>
          <li class="text-[#2E2C2C] text-[14px] font-bold mb-2">
            <a href="#">Kompaniya haqida</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Kontaktlar</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Qo’llab-quvvatlash markazi</a>
          </li>
        </ul>
        <ul>
          <li class="text-[#2E2C2C] text-[14px] font-bold mb-2">
            <a href="#">Qaytarish shartlari</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Kupon</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Ommaviy oferta</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Maxfiylik siyosati</a>
          </li>
        </ul>
        <ul>
          <li class="text-[#2E2C2C] text-[14px] font-bold mb-2">
            <a href="#">Tavsiyalar</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Haftalik TOP kitoblar</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Ommabop audiokitoblar</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Bepul kitoblar</a>
          </li>
        </ul>
        <ul>
          <li class="text-[#2E2C2C] text-[14px] font-bold mb-2">
            <a href="#">Hamkorlik</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Nashriyotlar uchun</a>
          </li>
          <li
            class="text-[#4D5870] text-[13px] my-1 transition duration-[500ms] hover:text-[#F54646]"
          >
            <a href="#">Mualliflar uchun</a>
          </li>
          <li class="footer-link">
            <a href="#">Kitobxonlar uchun</a>
          </li>
        </ul>
      </div>
      <div
        class="bg-[#E4E7EE] w-[196px] h-[66px] rounded-md text-[#2E2C2C] text-[13px] py-1 px-2 text-center"
      >
        <p>
          Saytdan xato toptingizmi? Textni belgilang va <b>CTRL + ENTER</b> ni
          bosing
        </p>
      </div>
    </div>

    <div class="flex items-center gap-5 mt-6">
      <p class="text-3 text-[#4D5870] font-semibold">
        Bizni ijtimoiy <br />
        tarmoqlarda kuzating:
      </p>
      <ul class="flex items-center gap-5">
        <li class="text-[#4D5870] text-[20px]">
          <a
            href="#"
            class="text-[#4D5870] transition duration-[500ms] text-[18px] hover:text-[#F54646]"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
        <li>
          <a
            href="#"
            class="text-[#4D5870] transition duration-[500ms] text-[18px] hover:text-[#F54646]"
          >
            <i class="fa-brands fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a
            href="#"
            class="text-[18px] ratote--icon transition duration-[500ms] text-[#4D5870] hover:text-[#F54646]"
            ><i class="fa-solid fa-paper-plane"></i
          ></a>
        </li>
      </ul>
    </div>
  </footer>
  <div class="w-full h-[1px] bg-[#DDE0E8] my-4"></div>
  <div
    class="max-w-[1440px] mx-auto px-[124px] py-2 flex justify-between items-center"
  >
    <p class="text-[#4D5870] text-[14px]">
      Barcha huquqlar himoyalangan © 2022 munir-nashriyoti.uz
    </p>
    <div class="iuc--logo flex items-center gap-2">
      <p class="text-[#4D5870] text-[14px]">Sayt ishlab chiquvchisi</p>
      <img src="@/static/imges/uic-logo.png" alt="uic-logo" />
    </div>
  </div>
</template>
<style leng="scss" scoped></style>
