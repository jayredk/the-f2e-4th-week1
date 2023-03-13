<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <div class="fixed z-20 h-[60px] w-full bg-secondary lg:bg-transparent">
    <div
      id="mobile-mask"
      :class="{ 'opacity-50': isActive }"
      class="fixed inset-0 z-20 bg-secondary opacity-0 transition-opacity duration-300 lg:hidden"
    ></div>
    <div
      id="panel"
      :class="{ '!translate-x-0': isActive }"
      class="fixed z-20 w-[155px] -translate-x-[155px] transition-transform duration-500 lg:min-h-screen lg:-translate-x-[135px] lg:bg-[url('@/assets/images/bg/bg_menuSide.png')] lg:bg-right lg:bg-no-repeat lg:pt-0"
    >
      <!-- TODO： 把 navbar 拆出來 -->
      <nav id="navbar" class="h-screen bg-primary px-10 pt-10 text-secondary">
        <ul>
          <li class="group mb-10">
            <a href="https://2022.thef2e.com/news">
              <img
                class="mx-auto mb-1 w-[60px] group-hover:scale-[1.2]"
                src="@/assets/images/ic/ic_menu_info.png"
                alt="menu_info"
              />
              關卡資訊
            </a>
          </li>
          <li class="group mb-10">
            <a href="https://2022.thef2e.com/works">
              <img
                class="mx-auto mb-1 w-[60px] group-hover:scale-[1.2]"
                src="@/assets/images/ic/ic_menu_list.png"
                alt="menu_list"
              />
              作品列表
            </a>
          </li>
          <li class="group mb-10">
            <a href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w">
              <img
                class="mx-auto mb-1 w-[60px] group-hover:scale-[1.2]"
                src="@/assets/images/ic/ic_menu_strategy.png"
                alt="menu_strategy"
              />
              攻略資源
            </a>
          </li>
          <li class="group">
            <a href="https://2022.thef2e.com/jobs">
              <img
                class="mx-auto mb-1 w-[60px] group-hover:scale-[1.2]"
                src="@/assets/images/ic/ic_menu_job.png"
                alt="menu_job"
              />
              求職專區
            </a>
          </li>
        </ul>
      </nav>
      <button
        class="absolute top-8 -right-10 w-[40px] translate-y-[-50%] lg:top-[50%] lg:-right-[60px] lg:w-[60px]"
        @click="isActive = !isActive"
      >
        <Transition mode="out-in">
          <img
            v-if="isActive"
            src="@/assets/images/btn/btn_burger_close.png"
            alt="menu-btn"
          />
          <img
            v-else
            src="@/assets/images/btn/btn_burger_open.png"
            alt="menu-btn"
          />
        </Transition>
      </button>
    </div>

    <img
      id="logo"
      class="fixed left-0 right-0 z-10 mx-auto w-[133px] pt-2 lg:top-[44px] lg:w-[680px] lg:pt-0"
      src="@/assets/images/logo/logo_text.png"
      alt="logo"
    />

    <a
      href="https://2022.thef2e.com/users"
      class="fixed top-3 right-2 z-10 mr-2 w-[40px] lg:top-[30px] lg:right-[15px]"
    >
      <img src="@/assets/images/btn/btn_user.png" alt="profile-btn" />
    </a>
  </div>
</template>
