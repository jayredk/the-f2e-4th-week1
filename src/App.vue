<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSignals from "@/components/AppSignals.vue";
import AppHome from "@/components/AppHome.vue";
import AppQuestion from "@/components/AppQuestion.vue";
import AppRole from "@/components/AppRole.vue";
import AppTheme from "@/components/AppTheme.vue";
import AppEvent from "@/components/AppEvent.vue";
import animation from "./animation";

onMounted(() => {
  const { animationDesktop } = animation;
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1440px)", () => {
    animationDesktop();
  });
});
</script>

<template>
  <div class="fixed inset-0 -z-50 bg-secondary"></div>
  <AppHeader></AppHeader>
  <img
    id="logo-sm"
    class="z-10 hidden opacity-0 lg:fixed lg:top-[30px] lg:left-[40px] lg:w-[200px]"
    src="@/assets/images/logo/logo.png"
    alt="small logo"
  />
  <div id="home-bg">
    <img
      id="startLine"
      class="hidden w-[1430px] lg:fixed lg:block"
      src="@/assets/images/main/start.png"
      alt="start"
    />
    <img
      id="cloud-1"
      class="fixed top-[55%] -left-5 w-[113px] lg:top-[45%] lg:w-[271px]"
      src="@/assets/images/bg/bg_decorate_01.png"
      alt="cloud-1"
    />
    <img
      id="cloud-2"
      class="fixed top-[55%] -right-9 w-[127px] lg:-right-[3rem] lg:top-[45%] lg:w-[305px]"
      src="@/assets/images/bg/bg_decorate_05.png"
      alt="cloud-2"
    />
    <AppSignals />
  </div>
  <main class="relative">
    <AppHome />

    <AppQuestion />

    <AppRole />

    <AppTheme />

    <AppEvent />

    <!-- <section id="award" class="mb-16 lg:absolute lg:left-0 lg:right-0">
      <h3
        class="mb-3 mt-8 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:mb-16 lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:627px_151px] lg:px-16 lg:pt-6 lg:pb-16 lg:text-6xl"
      >
        還有比賽等著你！
      </h3>

      <div
        class="container lg:flex lg:max-w-full lg:justify-center xl:max-w-[1175px]"
      >
        <img
          class="mx-auto w-[335px] lg:m-0 lg:mr-16 lg:w-[375px]"
          src="./assets/images/main/award.png"
          alt="award"
        />
        <div>
          <h4 class="mb-6 text-highlight">評審機制</h4>
          <p class="text-primary">
            初選： 將由六角學院前端、UI 評審進行第一波篩選。
          </p>
          <p class="mb-6 text-primary">
            決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
            由評審進行直播公布名單！
          </p>
          <h4 class="mb-6 text-highlight">獎項</h4>
          <ul class="list-decimal pl-5 text-primary">
            <li>初選佳作 共六十位 數位獎狀</li>
            <li>
              個人企業獎 共六位 NTD
              <h5 class="inline-block text-highlight">3,000</h5>
              /位
            </li>
            <li>
              團體企業獎 共三組 NTD
              <h5 class="inline-block text-highlight">10,000</h5>
              /組
            </li>
            <li>以上皆提供完賽數位獎狀</li>
          </ul>
        </div>
      </div>
    </section> -->

    <!-- <section id="bk7">
      <h3
        class="mb-3 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:mb-16 lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:466px_151px] lg:px-16 lg:pt-6 lg:pb-16 lg:text-6xl"
      >
        贊助單位
      </h3>

      <ul
        class="container lg:flex lg:max-w-[900px] lg:items-center lg:justify-between xl:max-w-[1175px]"
      >
        <li class="mb-10 flex flex-col items-center text-center">
          <div
            class="mb-4 flex h-[252px] w-[252px] items-center justify-center bg-[url('src/assets/images/btn/btn_sponsor.png')] bg-cover lg:h-[315px] lg:w-[315px]"
          >
            <img
              src="./assets/images/main/logo_blockstudio.png"
              alt="logo_blockstudio"
              class="absolute z-0 w-[200px] rounded-[25%] lg:w-[250px]"
            />
          </div>
          <span
            class="rounded-full border border-secondary-dark py-1 px-5 text-secondary-dark"
            >#版塊設計</span
          >
        </li>
        <li class="mb-10 flex flex-col items-center text-center">
          <div
            class="mb-4 flex h-[252px] w-[252px] items-center justify-center bg-[url('src/assets/images/btn/btn_sponsor.png')] bg-cover lg:h-[315px] lg:w-[315px]"
          >
            <img
              src="./assets/images/main/logo_titansoft.png"
              alt="logo_titansoft"
              class="absolute z-0 w-[200px] rounded-[25%] lg:w-[250px]"
            />
          </div>
          <span
            class="rounded-full border border-secondary-dark py-1 px-5 text-secondary-dark"
            >#鈦坦科技</span
          >
        </li>
        <li class="mb-10 flex flex-col items-center text-center">
          <div
            class="mb-4 flex h-[252px] w-[252px] items-center justify-center bg-[url('src/assets/images/btn/btn_sponsor.png')] bg-cover lg:h-[315px] lg:w-[315px]"
          >
            <img
              src="./assets/images/main/logo_kdanmobile.png"
              alt="logo_kdanmobile"
              class="absolute z-0 w-[200px] rounded-[25%] lg:w-[250px]"
            />
          </div>
          <span
            class="rounded-full border border-secondary-dark py-1 px-5 text-secondary-dark"
            >#凱鈿科技</span
          >
        </li>
      </ul>
      <div
        class="container relative hidden lg:block lg:max-w-[900px] xl:max-w-[1175px]"
      >
        <img
          class="absolute bottom-0 -left-[62px] -z-10 w-[331px]"
          src="./assets/images/bg/bg_decorate_04.png"
          alt="bg_decorate_04"
        />
        <img
          class="absolute bottom-0 right-0 -z-10 w-[342px]"
          src="./assets/images/bg/bg_decorate_08.png"
          alt="bg_decorate_08"
        />
      </div>
    </section>  -->

    <!-- <section id="finished" class="hidden lg:block">
      <div class="container relative lg:max-w-[900px] xl:max-w-[1175px]">
        <img src="./assets/images/main/finish.png" alt="finish" />
        <div id="finisedLine">
          <img
            class="absolute bottom-[15%] -left-[47%]"
            src="./assets/images/main/finishLine_l.png"
            alt="finishLine_l"
          />
          <img
            class="absolute bottom-[15%] -right-[50%]"
            src="./assets/images/main/finishLine_r.png"
            alt="finishLine_r"
          />
        </div>
      </div>
    </section> -->

    <!-- <section id="signup">
      <div class="container">
        <img
          class="mx-auto mb-40 w-[226px] lg:mb-0 lg:w-[520px]"
          src="./assets/images/logo/logo.png"
          alt="logo"
        />
        <img
          class="mx-auto w-[46px] lg:w-[84px]"
          src="./assets/images/btn/btn_joinHand.gif"
          alt="btn_joinHand"
        />
        <img
          class="mx-auto mb-5 w-[88px] lg:w-[160px]"
          src="./assets/images/btn/btn_join.png"
          alt="btn_join"
        />
        <h2 class="text-center text-highlight">立即報名</h2>
      </div>
    </section> -->
    <div
      id="character"
      class="container fixed bottom-0 left-0 right-0 z-20 flex origin-bottom items-center justify-center lg:max-w-[900px] xl:max-w-[1175px]"
    >
      <img
        class="absolute bottom-0 -z-10"
        src="@/assets/images/main/road.png"
        alt="road"
      />
      <img
        class="w-[30%]"
        src="@/assets/images/character/character_f2e.gif"
        alt="dog"
      />
      <img
        class="w-[30%]"
        src="@/assets/images/character/character_ui.gif"
        alt="cat"
      />
      <img
        class="w-[30%]"
        src="@/assets/images/character/character_team.gif"
        alt="pig"
      /><img
        id="grass-1"
        class="absolute -bottom-[30%] -left-[10%] -z-20 hidden w-[150px] origin-bottom scale-x-[-1] lg:block"
        src="./assets/images/bg/bg_decorate_09.png"
        alt="grass"
      />
      <img
        id="grass-2"
        class="absolute -bottom-[30%] -right-[10%] -z-20 hidden w-[150px] origin-bottom lg:block"
        src="./assets/images/bg/bg_decorate_09.png"
        alt="grass"
      />
    </div>
  </main>
</template>

<style scoped></style>
