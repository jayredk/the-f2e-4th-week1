<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSignals from "@/components/AppSignals.vue";
import AppHome from "@/components/AppHome.vue";
import AppQuestion from "@/components/AppQuestion.vue";
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
    class="hidden opacity-0 lg:fixed lg:top-[30px] lg:left-[40px] lg:w-[200px]"
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
    <!-- 
    <section id="bk3">
      <h3
        class="mb-3 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:875px_151px] lg:pt-6 lg:pb-16 lg:text-6xl"
      >
        本屆主題：互動式網頁設計
      </h3>
      <h5 class="mb-10 text-center text-xl text-secondary-dark lg:mb-16">
        以下兩個角色進行攜手合作
      </h5>

      <div
        class="container text-xl text-primary lg:flex lg:max-w-[900px] lg:justify-between lg:text-4xl xl:max-w-[1175px]"
      >
        <div
          class="mb-20 flex flex-row-reverse items-center justify-between lg:block lg:w-[250px]"
        >
          <div class="flex flex-col items-center">
            <img
              class="mb-1 w-[57px]"
              src="@/assets/images/btn/btn_joinHand.png"
              alt="btn-joinHand"
            />
            <img
              class="mb-4 w-[103px]"
              src="@/assets/images/btn/btn_join.png"
              alt="btn_join"
            />
            <h4>前端工程師</h4>
          </div>
          <img
            class="w-[157px] lg:hidden lg:w-[228px]"
            src="@/assets/images/character/character_f2e.png"
            alt="character_f2e"
          />
        </div>
        <div
          class="mb-20 flex items-center justify-between lg:block lg:w-[250px]"
        >
          <div class="flex flex-col items-center">
            <img
              class="mb-1 w-[57px]"
              src="@/assets/images/btn/btn_joinHand.png"
              alt="btn-joinHand"
            />
            <img
              class="mb-4 w-[103px]"
              src="@/assets/images/btn/btn_join.png"
              alt="btn_join"
            />
            <h4>ＵＩ設計師</h4>
          </div>
          <img
            class="w-[157px] lg:hidden lg:w-[228px]"
            src="@/assets/images/character/character_ui.png"
            alt="character_ui"
          />
        </div>
        <div
          class="mb-20 flex flex-row-reverse items-center justify-between lg:block lg:w-[250px]"
        >
          <div class="flex flex-col items-center">
            <img
              class="mb-1 w-[57px]"
              src="@/assets/images/btn/btn_joinHand.png"
              alt="btn-joinHand"
            />
            <img
              class="mb-4 w-[103px]"
              src="@/assets/images/btn/btn_join.png"
              alt="btn_join"
            />
            <h4>團體組(UI+前端)</h4>
          </div>
          <img
            class="w-[157px] lg:hidden lg:w-[228px]"
            src="@/assets/images/character/character_team.png"
            alt="character_team"
          />
        </div>
      </div>
    </section>

    <section id="bk4">
      <h3
        class="mb-3 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:940px_151px] lg:px-16 lg:pt-6 lg:pb-16 lg:text-6xl"
      >
        年度最強合作，三大主題來襲
      </h3>
      <h5 class="mb-10 text-center text-xl text-secondary-dark lg:mb-24">
        各路廠商強強聯手<br />共同設計出接地氣的網頁互動挑戰關卡
      </h5>
      <div
        class="container mb-16 text-center lg:max-w-[900px] lg:text-left xl:max-w-[1175px]"
      >
        <div class="mb-10 lg:flex lg:max-w-[820px] lg:items-start">
          <img
            class="mx-auto w-[200px] lg:mr-10 lg:ml-0 lg:w-[280px]"
            src="@/assets/images/main/week_1.png"
            alt="week1"
          />
          <div class="flex flex-col items-center lg:block">
            <h2 class="mb-2 text-highlight">WEEK 1</h2>
            <h3 class="mb-2 text-primary lg:mb-5">The F2E 活動網站設計</h3>
            <p
              class="mb-4 inline-block rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark lg:mr-2"
            >
              Parallax Scrolling
            </p>
            <p
              class="mb-4 inline-block rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark"
            >
              #版塊設計
            </p>
            <button
              type="button"
              class="mx-auto block rounded-full bg-secondary-dark px-6 py-2 text-white lg:m-0"
            >
              查看關卡細節
            </button>
          </div>
        </div>
        <div
          class="mb-10 lg:ml-auto lg:flex lg:max-w-[820px] lg:flex-row-reverse"
        >
          <img
            class="mx-auto w-[200px] lg:ml-10 lg:mr-0 lg:w-[280px]"
            src="@/assets/images/main/week_2.png"
            alt="week2"
          />
          <div class="flex flex-col items-center lg:block lg:text-right">
            <h2 class="mb-2 text-highlight">WEEK 2</h2>
            <h3 class="mb-2 text-primary lg:mb-5">今晚，我想來點點簽</h3>
            <p
              class="mb-4 inline-block w-fit rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark lg:mr-2"
            >
              Canvas
            </p>
            <p
              class="mb-4 inline-block rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark"
            >
              #凱鈿行動科技
            </p>
            <button
              type="button"
              class="mx-auto block rounded-full bg-secondary-dark px-6 py-2 text-white lg:mr-0"
            >
              查看關卡細節
            </button>
          </div>
        </div>
        <div class="lg:flex lg:max-w-[820px] lg:items-start">
          <img
            class="mx-auto w-[200px] lg:mr-10 lg:ml-0 lg:w-[280px]"
            src="@/assets/images/main/week_3.png"
            alt="week3"
          />
          <div class="flex flex-col items-center lg:block">
            <h2 class="mb-2 text-highlight">WEEK 3</h2>
            <h3 class="mb-2 text-primary lg:mb-5">Scrum 新手村</h3>
            <p
              class="mb-4 inline-block rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark lg:mr-2"
            >
              JS draggable
            </p>
            <p
              class="mb-4 inline-block rounded-full border border-secondary-dark px-6 text-lg text-secondary-dark"
            >
              #鈦坦科技
            </p>
            <button
              type="button"
              class="mx-auto block rounded-full bg-secondary-dark px-6 py-2 text-white lg:m-0"
            >
              查看關卡細節
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="bk5">
      <h3
        class="mb-16 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:hidden"
      >
        重要時程
      </h3>
      <div
        class="container relative lg:flex lg:max-w-[900px] lg:items-start lg:justify-between xl:max-w-[1175px]"
      >
        <div class="mb-20 flex flex-col items-center justify-center lg:mb-0">
          <div class="flex h-[160px] flex-col items-center justify-center">
            <img
              src="@/assets/images/btn/btn_joinHand.png"
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
          <div class="hidden h-[140px] w-8 lg:block">
            <img
              class="h-full w-full object-cover object-bottom"
              src="@/assets/images/main/date_weekLine.png"
              alt="date-weekline"
            />
          </div>
        </div>
        <div class="mb-20 flex flex-col items-center justify-center lg:mb-0">
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
          <div class="hidden h-[70px] w-8 lg:block">
            <img
              class="h-full w-full object-cover object-bottom"
              src="@/assets/images/main/date_weekLine.png"
              alt="date-weekline"
            />
          </div>
        </div>
        <div class="mb-20 flex flex-col items-center justify-center lg:mb-0">
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
            <em class="block not-italic text-highlight"
              >額外競賽： 主題豐厚獎金等著你</em
            >
          </h5>
          <div class="hidden h-[110px] w-8 lg:block">
            <img
              class="h-full w-full object-cover object-bottom"
              src="@/assets/images/main/date_weekLine.png"
              alt="date-weekline"
            />
          </div>
        </div>
        <div
          id="date-line"
          class="absolute bottom-[-80px] hidden h-[140px] lg:block"
        >
          <img
            class="translate-x-[-30px]"
            src="@/assets/images/main/date_line.png"
            alt="date-line"
          />
        </div>
      </div>
    </section>

    <section
      id="bk6-1"
      class="container relative text-center lg:max-w-[900px] xl:max-w-[1175px]"
    >
      <h2 class="text-highlight">
        區區修煉<br class="lg:hidden" />已經無法滿足了嗎？
      </h2>
      <img
        class="absolute top-[200%] left-0 hidden w-[368px] lg:block"
        src="./assets/images/bg/bg_decorate_03.png"
        alt="bg_decorate_03"
      />
      <img
        class="absolute top-[150%] right-0 hidden w-[450px] lg:block"
        src="./assets/images/bg/bg_decorate_07.png"
        alt="bg_decorate_07"
      />
    </section>

    <section id="bk6-2" class="mt-[100%] mb-16">
      <h3
        class="mb-3 w-full bg-[url('@/assets/images/bg/bg_talking_c.png')] bg-[length:100%_100%] bg-bottom bg-no-repeat pb-6 pt-3 text-center text-2xl font-bold text-primary lg:mb-16 lg:bg-[url('@/assets/images/bg/bg_talking.png')] lg:bg-[length:627px_151px] lg:px-16 lg:pt-6 lg:pb-16 lg:text-6xl"
      >
        還有比賽等著你！
      </h3>

      <div
        class="container lg:flex lg:max-w-[900px] lg:justify-between xl:max-w-[1175px]"
      >
        <img
          class="mx-auto w-[335px] lg:m-0 lg:w-[375px]"
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
    </section>

    <section id="bk7">
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
    </section>

    <section id="finished" class="hidden lg:block">
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
    </section>

    <section id="signup">
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
