<template>
  <section>
    <section
      class="max-w-[1440px] mx-auto px-[124px] py-4 mt-[10rem] bg-main--bg"
    >
      <!-- slider page -->
      <div class="flex">
        <MainSliderText
          :item="{
            title: 'Munir’dagi TOP 10 kitoblar',
            parag:
              'Munir onlayn do‘konidagi hozirda eng ko‘p mutolaa qilinayotgan TOP kitoblar ro’yxati bilan tanishishingiz va ularni o’qishingiz mumkin.',
            text: 'Batafsil',
          }"
        />
      </div>
    </section>
    <!-- end of slider -->
    <section class="max-w-[1440px] mx-auto px-[124px] py-4 bg-[#fff]">
      <div class="flex justify-between gap-5">
        <div>
          <h1 class="heading-text my-3">
            Siz uchun qulaylik yaratish bizning oliy maqsadimiz! 😇
          </h1>
          <p class="text-second--color text-sm font-normal mb-10">
            Bizning kunlik tavsiyalarimiz va sizning qiziqishlaringizga mos
            bo‘lgan kitoblarni ushbu blokda ko‘rishingiz mumkin degan matn kerak
            bu yerga.
          </p>
          <div class="flex items-center gap-6 my-8">
            <MainSmallCart
              v-for="(item, index) in smallCard"
              :key="index"
              :item="item"
            />
          </div>

          <!-- small slider  -->
          <div class="flex my-4 gap-[19px]">
            <SmallSliderCart
              v-for="(item, index) in smallSlider"
              :key="index"
              v-bind="{
                url: item.url,
                title: item.title,
              }"
              class="w-[130px]"
            />
          </div>
          <!-- end of small slider -->
        </div>
        <!-- Right side -->
        <div class="basis-1/2">
          <h2 class="heading-text my-3">Tavsiya qilamiz</h2>
          <MainStoryCart
            :item="{
              url: 'src/static/imges/mainpage/main4.png',
              storyName: 'Kichkina Shaxzoda',
              author: 'Antuan de Sent-Ekzyuperi',
              price: '150 000 UZS',
              grade: '4.0',
            }"
          >
            <span
              class="absolute top-2 right-3 w-8 h-8 flex justify-center font-bold cursor-pointer items-center rounded-full bg-[#ffff]"
              ><i class="bi bi-bookmark"></i
            ></span>
          </MainStoryCart>

          <MainStoryCart
            :item="{
              url: 'src/static/imges/mainpage/main6.png',
              storyName: 'Тонкое искусство пофигизма ....',
              author: 'Mark Menson',
              price: '150 000 UZS',
              grade: '4.0',
            }"
            class="my-4"
          >
            <span
              class="absolute top-2 right-3 w-8 h-8 flex justify-center font-bold cursor-pointer items-center rounded-full bg-[#ffff]"
              ><i class="bi bi-bookmark"></i
            ></span>
          </MainStoryCart>

          <BaseButton
            class="w-full border border-[#E4E7EE] transition duration-500 bg-[#FAFAFA] ease-out text-main--color hover:bg-main--color hover:text-[#fff]"
            ><span>Barcha kitoblar</span>
          </BaseButton>
        </div>
      </div>
    </section>
    <section class="max-w-[1440px] mx-auto px-[124px] py-4 bg-main--bg">
      <Theme
        :item="{
          title: 'Nashriyotlar',
          content: 'Barcha nashriyotlar',
        }"
      />

      <div class="flex gap-4">
        <MainCategory
          v-for="(item, index) in categoryData"
          :key="index"
          :url="item.url"
          :text="item.text"
          :title="item.title"
          :text1="item.text1"
          :text2="item.text2"
        />
      </div>
      <div class="flex gap-4">
        <div class="bg-[#fff] my-3 px-6 py-5 rounded-[10px] basis-3/4">
          <h2 class="heading-text">Toplamlar</h2>
          <div class="bg-[#E4E7EE] h-[1px] my-3"></div>
          <div class="flex items-center gap-3">
            <CollectionSlider
              v-for="(item, index) in 2"
              class="mt-10 cursor-pointer"
              :item="{
                url1: 'src/static/imges/mainpage/collection.png',
                url2: 'src/static/imges/mainpage/collection.png',
                url3: 'src/static/imges/mainpage/collection.png',
                title: 'Siyosat-shunoslar uchun maxsus',
                text1: '18+ 8 ta kitob',
                text2: '1 500 000 UZS',
              }"
            />
          </div>
        </div>
        <div class="bg-[#fff] my-3 px-6 py-5 rounded-[10px] basis-2/5">
          <div class="flex items-center justify-between">
            <h2 class="heading-text">Janrlar</h2>
            <div class="bg-[#F5F5F5] py-1 px-2 rounded-md">
              <input
                type="text"
                id="janr"
                placeholder="Qidirish"
                class="outline-none text-sm bg-[#F5F5F5]"
              />
              <label for="janr" class="text-[#8492A6]">
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
            </div>
          </div>
          <div class="bg-[#E4E7EE] h-[1px] my-3"></div>

          <div class="flex gap-2">
            <Genre
              v-for="(item, index) in genreData"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import MainSliderText from "../components/main/MainSliderText.vue";
import MainSmallCart from "../components/main/MainSmallCart.vue";
import SmallSliderCart from "../components/main/SmallSliderCart.vue";
import MainStoryCart from "../components/main/MainStoryCart.vue";
import BaseButton from "../components/general/BaseButton.vue";
import Theme from "../components/general/Theme.vue";
import MainCategory from "../components/main/MainCategory.vue";
import CollectionSlider from "../components/main/CollectionSlider.vue";
import Genre from "../components/main/Genre.vue";
export default {
  components: {
    MainSliderText,
    MainSmallCart,
    SmallSliderCart,
    MainStoryCart,
    BaseButton,
    Theme,
    MainCategory,
    CollectionSlider,
    Genre,
  },
  data() {
    return {
      smallCard: [
        {
          icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.3104 12.1971C23.334 13.1734 23.334 14.7563 24.3104 15.7326C25.2867 16.7089 26.8695 16.7089 27.8459 15.7326C28.8222 14.7563 28.8222 13.1734 27.8459 12.1971C26.8695 11.2208 25.2867 11.2208 24.3104 12.1971Z" fill="#F54646" fill-opacity="0.4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5253 22.8033L17.2393 27.5173C17.8901 28.1681 18.9454 28.1681 19.5963 27.5173C20.2473 26.8665 20.2473 25.8111 19.5963 25.1603L14.8823 20.4461C14.2314 19.7953 13.1761 19.7953 12.5253 20.4461C11.8744 21.0971 11.8744 22.1523 12.5253 22.8033Z" fill="#F54646" fill-opacity="0.4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.9176 18.153C36.0296 19.6084 35.5001 21.0399 34.4679 22.072L21.9519 34.588C19.9993 36.5407 16.8334 36.5407 14.8808 34.588L5.45274 25.16C3.50013 23.2074 3.50013 20.0415 5.45274 18.0889L17.9688 5.57288C19.0009 4.54076 20.4324 4.01119 21.8878 4.12314L30.6424 4.79658C33.1013 4.98573 35.0551 6.93946 35.2443 9.39836L35.9176 18.153ZM24.3104 15.7326C23.334 14.7563 23.334 13.1734 24.3104 12.1971C25.2867 11.2208 26.8695 11.2208 27.8459 12.1971C28.8222 13.1734 28.8222 14.7563 27.8459 15.7326C26.8695 16.7089 25.2867 16.7089 24.3104 15.7326ZM17.2393 27.5173L12.5253 22.8033C11.8744 22.1523 11.8744 21.0971 12.5253 20.4461C13.1761 19.7953 14.2314 19.7953 14.8823 20.4461L19.5963 25.1603C20.2473 25.8111 20.2473 26.8665 19.5963 27.5173C18.9454 28.1681 17.8901 28.1681 17.2393 27.5173Z" fill="#F54646"/>
</svg>
`,
          text: "Super chegirma",
        },
        {
          icon: ` <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.666 20H13.633C14.4275 20 15.1115 20.5608 15.2673 21.3398L16.666 28.3333L9.25718 33.2725C8.1496 34.011 6.66602 33.217 6.66602 31.8858V25C6.66602 22.2385 8.9046 20 11.666 20Z" fill="#F54646" fill-opacity="0.4"/>
<path d="M28.334 20H26.367C25.5725 20 24.8885 20.5608 24.7327 21.3398L23.334 28.3333L30.7428 33.2725C31.8505 34.011 33.334 33.217 33.334 31.8858V25C33.334 22.2385 31.0955 20 28.334 20Z" fill="#F54646" fill-opacity="0.4"/>
<path d="M21.9429 33.333H18.0562C17.2667 33.333 16.5789 33.8963 16.645 34.683C16.7492 35.922 17.3337 37.6538 19.6732 38.2585C19.8862 38.3135 20.1129 38.3135 20.3259 38.2585C22.6654 37.6538 23.2499 35.922 23.3541 34.683C23.4202 33.8963 22.7322 33.333 21.9429 33.333Z" fill="#F54646" fill-opacity="0.4"/>
<path d="M11.6661 13.3334C12.9158 9.58455 16.9763 5.36716 18.93 3.49133C19.5323 2.91305 20.4667 2.91305 21.0688 3.49133C23.0227 5.36716 27.0832 9.58453 28.3327 13.3334C29.6215 17.1998 28.0507 24.1448 26.8805 28.2874C26.3035 30.3301 24.4122 31.6668 22.2897 31.6668H17.6948C15.5792 31.6668 13.6925 30.3388 13.1125 28.3041C11.9366 24.1788 10.3598 17.2519 11.6661 13.3334Z" fill="#F54646"/>
<path d="M19.9993 19.9997C21.8403 19.9997 23.3327 18.5073 23.3327 16.6663C23.3327 14.8254 21.8403 13.333 19.9993 13.333C18.1584 13.333 16.666 14.8254 16.666 16.6663C16.666 18.5073 18.1584 19.9997 19.9993 19.9997Z" fill="#F54646" fill-opacity="0.4"/>
</svg>
`,
          text: "Haftalik TOP kitoblar",
        },
        {
          icon: ` <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0007 6.66634C12.6369 6.66634 6.66732 12.6359 6.66732 19.9997V21.6663H3.33398V19.9997C3.33398 10.7949 10.7959 3.33301 20.0007 3.33301C29.2053 3.33301 36.6673 10.7949 36.6673 19.9997V21.6663H33.334V19.9997C33.334 12.6359 27.3645 6.66634 20.0007 6.66634Z" fill="#F54646" fill-opacity="0.4"/>
<path d="M10.0007 20H3.33398V30C3.33398 32.7615 5.57257 35 8.33398 35H10.0007C12.7621 35 15.0007 32.7615 15.0007 30V25C15.0007 22.2385 12.7621 20 10.0007 20Z" fill="#F54646"/>
<path d="M30 20C27.2385 20 25 22.2385 25 25V30C25 32.7615 27.2385 35 30 35H31.6667C34.4282 35 36.6667 32.7615 36.6667 30V20H30Z" fill="#F54646"/>
</svg>
`,
          text: "Ommabop audiokitoblar",
        },
        {
          icon: ` <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33398 6.66699C5.57257 6.66699 3.33398 8.90558 3.33398 11.667V28.3337C3.33398 31.0952 5.57257 33.3337 8.33398 33.3337H13.3779C14.4527 33.3337 15.5205 33.507 16.5402 33.8468L20.0007 35.0003L23.4612 33.8468C24.4808 33.507 25.5487 33.3337 26.6235 33.3337H31.6673C34.4288 33.3337 36.6673 31.0952 36.6673 28.3337V11.667C36.6673 8.90558 34.4288 6.66699 31.6673 6.66699H25.0007C23.0095 6.66699 21.2222 7.53993 20.0007 8.92396C18.7792 7.53993 16.9918 6.66699 15.0007 6.66699H8.33398Z" fill="#F54646" fill-opacity="0.4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33398 11.667C3.33398 8.90558 5.57257 6.66699 8.33398 6.66699H15.0007C16.9918 6.66699 18.7792 7.53993 20.0007 8.92396V35.0003L16.5402 33.8468C15.5205 33.507 14.4527 33.3337 13.3779 33.3337H8.33398C5.57257 33.3337 3.33398 31.0952 3.33398 28.3337V11.667Z" fill="#F54646"/>
</svg>
`,
          text: "Bepul kitoblar",
        },
      ],

      smallSlider: [
        {
          url: "src/static/imges/mainpage/main5.png",
          title: "X. To‘xtaboyev xotirasiga bag‘ishlanadi",
        },
        {
          url: "src/static/imges/mainpage/main3.png",
          title: "Kitoblarning aql uchun foydalari",
        },
        {
          url: "src/static/imges/mainpage/main1.png",
          title: "Yosh Kitobxon - 2022 ga start berildi",
        },
        {
          url: "src/static/imges/mainpage/main2.png",
          title: "Yangi O‘zbekiston Strategiyasi ha...",
        },
        {
          url: "src/static/imges/mainpage/main3.png",
          title: "Prezident nomi bilan atalgan kitob taqdimot...",
        },
        {
          url: "src/static/imges/mainpage/hill2.png",
          title: "Allamjonov haqiqatdan ham aydormi?",
        },
      ],
      categoryData: [
        {
          url: "src/static/imges/mainpage/nashriyot2.png",
          title: "“Standart Poligraph Books” MChJ",
          text: "Tashkil qilingan: 23 Yanvar, 2002",
          text1: "Jami kitoblar",
          text2: "867 ta",
        },
        {
          url: "src/static/imges/mainpage/nashriyot1.png",
          title: "“Munir” kitob nashriyoti ",
          text: "Tashkil qilingan: 20 Mart, 2002",
          text1: "Jami kitoblar",
          text2: "867 ta",
        },
        {
          url: "src/static/imges/mainpage/nashriyot4.png",
          title: "“Macmillan Book Store” dokoni",
          text: "Tashkil qilingan: 23 Yanvar, 2002",
          text1: "Jami kitoblar",
          text2: "867 ta",
        },
        {
          url: "src/static/imges/mainpage/nashriyot3.png",
          title: "“Ijod Press” Nashriyot dokoni",
          text: "Tashkil qilingan: 23 Yanvar, 2002",
          text1: "Jami kitoblar",
          text2: "867 ta",
        },
      ],

      genreData: [
        { url: "src/static/imges/mainpage/janr1.png", text: "San’at" },
        { url: "src/static/imges/mainpage/janr2.png", text: "San’at" },
      ],
    };
  },
};
</script>
<style></style>
