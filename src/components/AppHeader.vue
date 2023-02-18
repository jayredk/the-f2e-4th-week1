<template>
  <div
    class="fixed z-20 flex w-full items-center justify-between pt-2 lg:block lg:h-screen lg:max-w-[20px] lg:bg-[url('../assets/images/bg/bg_menuSide.png')] lg:pt-0"
  >
    <button
      class="max-w-[40px] lg:absolute lg:top-[50%] lg:left-[20px] lg:max-w-[60px]"
    >
      <img
        class=""
        src="@/assets/images/btn/btn_burger_open.png"
        alt="menu-btn"
      />
    </button>
    <img
      class="w-[133px] lg:fixed lg:left-0 lg:right-0 lg:top-[44px] lg:mx-auto lg:w-[680px]"
      src="@/assets/images/logo/logo_text.png"
      alt="logo"
    />
    <button class="mr-2 max-w-[40px] lg:fixed lg:top-[30px] lg:right-[15px]">
      <img src="@/assets/images/btn/btn_user.png" alt="profile-btn" />
    </button>
  </div>
</template>
