<template>
  <section id="question" class="min-h-screen">
    <h3
      class="mb-3 mt-8 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:mb-16 lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:736px_151px] lg:pt-6 lg:pb-16 lg:text-6xl"
    >
      你是否也有以下困擾？
    </h3>

    <div
      class="container mb-16 text-center lg:flex lg:max-w-[900px] xl:max-w-[1175px]"
    >
      <div class="block lg:mx-2">
        <h4 class="text-highlight">羨慕別人的酷酷網頁動畫？</h4>
        <picture>
          <source
            media="(min-width: 1175px)"
            srcset="@/assets/images/main/question_1.png"
          />
          <img src="@/assets/images/main/question_1_m.png" alt="Q1-m" />
        </picture>
      </div>
      <div class="block lg:mx-2">
        <h4 class="text-highlight">滿足不了同事的許願？</h4>
        <img src="@/assets/images/main/question_2.png" alt="Q2" />
      </div>
      <div class="block lg:mx-2">
        <h4 class="text-highlight">動畫技能樹太雜無從下手？</h4>
        <picture>
          <source
            media="(min-width: 1175px)"
            srcset="@/assets/images/main/question_3.png"
          />
          <img src="@/assets/images/main/question_3_m.png" alt="Q3-m" />
        </picture>
      </div>
    </div>
  </section>
</template>
