<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSignals from "@/components/AppSignals.vue";
import AppHome from "@/components/AppHome.vue";
import AppQuestion from "@/components/AppQuestion.vue";
import AppRole from "@/components/AppRole.vue";
import AppTheme from "@/components/AppTheme.vue";
import AppEvent from "@/components/AppEvent.vue";
import AppSponsor from "@/components/AppSponsor.vue";
import animation from "./animation";

const dog = ref(null);
const cat = ref(null);
const pig = ref(null);

function vTranslateX(target, x) {
  const oTarget = target.value;
  oTarget.style.transform = `translateX(${x})`;
}
function move(e) {
  const mouseXaxis = e.clientX;
  const { left, width } = cat.value.getBoundingClientRect();
  const center = left + width / 2;

  if (mouseXaxis > center) {
    vTranslateX(dog, "-15%");
    vTranslateX(cat, "-10%");
    vTranslateX(pig, "10%");
  } else {
    vTranslateX(dog, "-10%");
    vTranslateX(cat, "10%");
    vTranslateX(pig, "15%");
  }
}

function reset() {
  vTranslateX(dog, "0%");
  vTranslateX(cat, "0%");
  vTranslateX(pig, "0%");
}

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
      class="hidden w-[1430px] lg:fixed lg:left-0 lg:right-0 lg:mx-auto lg:block"
      src="@/assets/images/main/start.png"
      alt="start"
    />
    <img
      id="cloud-1"
      class="fixed top-[55%] -left-5 w-[113px] md:w-[271px] lg:top-[15%] lg:w-[430px]"
      src="@/assets/images/bg/bg_decorate_01.png"
      alt="cloud-1"
    />
    <img
      id="cloud-2"
      class="fixed top-[55%] -right-9 w-[127px] md:w-[305px] lg:-right-[3rem] lg:top-[20%] lg:w-[485px]"
      src="@/assets/images/bg/bg_decorate_05.png"
      alt="cloud-2"
    />
    <AppSignals />
  </div>

  <div
    id="map"
    class="z-10 hidden max-w-[224px] lg:fixed lg:bottom-8 lg:left-12 lg:block"
  >
    <div class="relative">
      <img src="./assets/images/main/map.svg" alt="map" />
      <img
        id="map-finish"
        class="absolute top-0 opacity-0"
        src="./assets/images/main/map_finish.svg"
        alt="map"
      />
      <img
        id="map-now"
        class="absolute top-[30%] left-0"
        src="./assets/images/main/map_now.gif"
        alt="map"
      />
    </div>
  </div>

  <a
    id="join-btn"
    class="fixed bottom-5 right-5 z-10 hidden max-w-[103px] lg:flex lg:flex-col lg:items-center"
    href="https://2022.thef2e.com/signup"
  >
    <p class="text-2xl font-bold text-primary">JOIN</p>
    <img
      class="w-[57px]"
      src="./assets/images/btn/btn_joinHand.gif"
      alt="joinHand"
    />
    <img src="./assets/images/btn/btn_join.png" alt="btn_join" />
  </a>

  <main class="relative z-0">
    <div
      id="character"
      class="container fixed bottom-0 left-0 right-0 z-10 flex origin-bottom items-center justify-center lg:max-w-[900px] xl:max-w-[1175px]"
      @mouseleave="reset"
    >
      <img
        class="absolute bottom-0 -z-10"
        src="@/assets/images/main/road.png"
        alt="road"
      />
      <img
        id="dog"
        ref="dog"
        class="w-[30%] transition-transform duration-300"
        src="@/assets/images/character/character_f2e.gif"
        alt="dog"
        @mouseenter="move"
      />
      <img
        id="cat"
        ref="cat"
        class="w-[30%] transition-transform duration-300"
        src="@/assets/images/character/character_ui.gif"
        alt="cat"
        @mouseenter="move"
      />
      <img
        id="pig"
        ref="pig"
        class="w-[30%] transition-transform duration-300"
        src="@/assets/images/character/character_team.gif"
        alt="pig"
        @mouseenter="move"
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
      <img
        id="tree-1"
        class="absolute bottom-[-5%] -left-[20%] -z-20 w-[331px]"
        src="@/assets/images/bg/bg_decorate_04.png"
        alt="bg_decorate_04"
      />
      <img
        id="tree-2"
        class="absolute bottom-[-5%] -right-[20%] -z-20 w-[342px]"
        src="@/assets/images/bg/bg_decorate_08.png"
        alt="bg_decorate_08"
      />
    </div>

    <AppHome />

    <AppQuestion />

    <AppRole />

    <AppTheme />

    <AppEvent />

    <AppSponsor />

    <div id="finish" class="relative z-20">
      <section class="z-30 hidden min-h-screen lg:block">
        <div class="container relative max-w-[80%]">
          <img
            id="goal"
            class="min-h-screen origin-bottom"
            src="@/assets/images/main/finish.png"
            alt="goal"
          />
          <div
            id="goal-line"
            class="absolute bottom-[20%] flex h-[12%] justify-center"
          >
            <img
              id="goal-line-l"
              class="translate-x-[2%]"
              src="@/assets/images/main/finishLine_l.png"
              alt="goal-line-l"
            />
            <img
              id="goal-line-r"
              class="translate-x-[-2%]"
              src="@/assets/images/main/finishLine_r.png"
              alt="goal-line-r"
            />
          </div>
        </div>
      </section>

      <section
        id="signup"
        class="lg:absolute lg:top-[20%] lg:left-0 lg:right-0"
      >
        <div class="container">
          <img
            id="signup-logo"
            class="mx-auto mb-40 w-[226px] lg:mb-0 lg:w-[520px]"
            src="./assets/images/logo/logo.png"
            alt="logo"
          />
          <div id="signup-btn" class="group">
            <img
              class="mx-auto w-[46px] group-hover:invisible lg:w-[84px]"
              src="@/assets/images/btn/btn_joinHand.gif"
              alt="btn_joinHand"
            />
            <img
              class="mx-auto mb-5 w-[88px] group-hover:hidden lg:w-[160px]"
              src="@/assets/images/btn/btn_join.png"
              alt="btn_join"
            />
            <img
              class="mx-auto mb-5 hidden w-[88px] group-hover:block lg:w-[160px]"
              src="@/assets/images/btn/btn_join_h.png"
              alt="btn_join"
            />
            <h2 class="text-center text-highlight">立即報名</h2>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
