<template>
  <section id="schedule" class="h-screen">
    <h3
      class="mb-16 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:hidden"
    >
      重要時程
    </h3>
    <ul
      class="container relative lg:mt-[5%] lg:mb-[3%] lg:flex lg:max-w-[90%] lg:items-start lg:justify-between"
    >
      <li
        class="mb-20 flex basis-1/3 flex-col items-center justify-center lg:mb-0"
      >
        <div class="flex flex-col items-center justify-center bg-secondary">
          <div class="flex h-[160px] flex-col items-center justify-center">
            <img
              src="@/assets/images/btn/btn_joinHand.gif"
              alt="joinHand"
              class="mb-1 w-[57px]"
            />
            <img
              src="@/assets/images/btn/btn_join.png"
              alt="join"
              class="mb-3 w-[103px]"
            />
          </div>
          <h2 class="mb-3 text-highlight">SIGN UP</h2>
          <h4 class="mb-3 rounded-full bg-primary px-7 py-2 text-white">
            10/13 - 11/6
          </h4>
          <h5 class="text-secondary-dark lg:mb-5">截止前可修改報名組別</h5>
        </div>
        <div class="absolute bottom-[-25%] -z-10 hidden w-8 lg:block">
          <img
            class="h-full w-full object-cover object-bottom"
            src="@/assets/images/main/date_weekLine.png"
            alt="date-weekline"
          />
        </div>
      </li>
      <li
        class="mb-20 flex basis-1/3 flex-col items-center justify-center lg:mb-0"
      >
        <div class="flex flex-col items-center justify-center bg-secondary">
          <div class="h-[160px]">
            <img
              src="@/assets/images/main/date_start.png"
              alt="date-start"
              class="mb-2 w-[140px]"
            />
          </div>
          <h2 class="mb-3 text-highlight">START</h2>
          <h4 class="mb-3 rounded-full bg-primary px-7 py-2 text-white">
            10/31 - 11/28
          </h4>
          <h5 class="text-center text-secondary-dark lg:mb-5">
            10/31(一) UI、團體組開賽<br />11/7(一) 前端組開賽
          </h5>
        </div>
        <div
          class="absolute bottom-[-16%] -z-10 hidden w-8 lg:block xl:bottom-[-20%]"
        >
          <img
            class="h-full w-full object-cover object-bottom"
            src="@/assets/images/main/date_weekLine.png"
            alt="date-weekline"
          />
        </div>
      </li>
      <li
        class="mb-20 flex basis-1/3 flex-col items-center justify-center lg:mb-0"
      >
        <div class="flex flex-col items-center justify-center bg-secondary">
          <div class="h-[160px]">
            <img
              src="@/assets/images/main/date_upload.png"
              alt="date-upload"
              class="mb-2 w-[140px]"
            />
          </div>
          <h2 class="mb-3 text-highlight">UPLOAD</h2>
          <h4 class="mb-3 rounded-full bg-primary px-7 py-2 text-white">
            10/31 - 11/28
          </h4>
          <h5
            class="inline-flex flex-col items-center justify-center text-secondary-dark lg:mb-5"
          >
            依賽程登錄作品
            <em class="block font-normal not-italic text-highlight"
              >額外競賽： 主題豐厚獎金等著你</em
            >
          </h5>
        </div>
        <div class="absolute bottom-[-25%] -z-10 hidden w-8 lg:block">
          <img
            class="h-full w-full object-cover object-bottom"
            src="@/assets/images/main/date_weekLine.png"
            alt="date-weekline"
          />
        </div>
      </li>
    </ul>
    <div id="date-line" class="mx-auto hidden h-[16vh] lg:block lg:max-w-[90%]">
      <div
        id="date-line-mask"
        class="absolute h-full w-full origin-right bg-secondary"
      ></div>
      <img src="@/assets/images/main/date_line.png" alt="date-line" />
    </div>
  </section>
</template>
