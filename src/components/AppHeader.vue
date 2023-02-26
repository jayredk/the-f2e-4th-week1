<template>
  <div class="fixed z-10 h-[60px] w-full bg-secondary lg:bg-transparent">
    <div
      id="panel"
      class="fixed z-10 max-w-[155px] -translate-x-[155px] lg:h-screen lg:-translate-x-[135px] lg:bg-[url('@/assets/images/bg/bg_menuSide.png')] lg:bg-right lg:bg-no-repeat lg:pt-0"
    >
      <!-- TODO： 把 navbar 拆出來 -->
      <nav id="navbar" class="h-full bg-primary px-10 pt-10 text-secondary">
        <ul>
          <li class="mb-10">
            <img
              class="mx-auto mb-1 w-[60px]"
              src="../assets/images/ic/ic_menu_info.png"
              alt="menu_info"
            />
            關卡資訊
          </li>
          <li class="mb-10">
            <img
              class="mx-auto mb-1 w-[60px]"
              src="../assets/images/ic/ic_menu_list.png"
              alt="menu_list"
            />
            作品列表
          </li>
          <li class="mb-10">
            <img
              class="mx-auto mb-1 w-[60px]"
              src="../assets/images/ic/ic_menu_strategy.png"
              alt="menu_strategy"
            />
            攻略資源
          </li>
          <li>
            <img
              class="mx-auto mb-1 w-[60px]"
              src="../assets/images/ic/ic_menu_job.png"
              alt="menu_job"
            />
            求職專區
          </li>
        </ul>
      </nav>
      <button
        class="absolute top-8 -right-10 w-[40px] translate-y-[-50%] lg:top-[50%] lg:-right-[60px] lg:w-[60px]"
      >
        <img src="@/assets/images/btn/btn_burger_open.png" alt="menu-btn" />
      </button>
    </div>

    <img
      id="logo"
      class="fixed left-0 right-0 z-10 mx-auto w-[133px] pt-2 lg:top-[44px] lg:w-[680px] lg:pt-0"
      src="@/assets/images/logo/logo_text.png"
      alt="logo"
    />

    <button
      class="fixed top-3 right-2 z-10 mr-2 w-[40px] lg:top-[30px] lg:right-[15px]"
    >
      <img src="@/assets/images/btn/btn_user.png" alt="profile-btn" />
    </button>
  </div>
</template>
