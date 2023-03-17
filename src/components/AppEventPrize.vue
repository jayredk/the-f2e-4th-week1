<template>
  <section id="prize" class="mb-16 lg:absolute lg:left-0 lg:right-0 lg:top-0">
    <h3
      class="mb-12 mt-8 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:mb-16 lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:627px_151px] lg:px-16 lg:pt-6 lg:pb-16 lg:text-6xl"
    >
      還有比賽等著你！
    </h3>

    <div
      class="container lg:flex lg:max-w-full lg:justify-center xl:max-w-[1175px]"
    >
      <div
        id="trophy"
        class="relative mx-auto w-[335px] lg:m-0 lg:mr-16 lg:w-[375px]"
      >
        <img
          id="trophy-light"
          src="@/assets/images/main/award_light.png"
          alt="light"
        />
        <img
          class="absolute top-0"
          src="@/assets/images/main/award_trophy.png"
          alt="trophy"
        />
      </div>

      <div id="prize-content">
        <h4 class="mb-6 text-4xl text-highlight">評審機制</h4>
        <p class="text-lg text-primary">
          初選： 將由六角學院前端、UI 評審進行第一波篩選。
        </p>
        <p class="mb-6 text-lg text-primary">
          決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
          由評審進行直播公布名單！
        </p>
        <h4 class="mb-6 text-4xl text-highlight">獎項</h4>
        <ul class="list-decimal pl-5 text-lg text-primary">
          <li>初選佳作 共六十位 數位獎狀</li>
          <li>
            個人企業獎 共六位 NTD
            <h5 class="inline-block text-2xl text-highlight">3,000</h5>
            /位
          </li>
          <li>
            團體企業獎 共三組 NTD
            <h5 class="inline-block text-2xl text-highlight">10,000</h5>
            /組
          </li>
          <li>以上皆提供完賽數位獎狀</li>
        </ul>
      </div>
    </div>
  </section>
</template>
