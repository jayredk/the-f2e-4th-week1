<script setup>
import AppParticipants from "@/components/AppParticipants.vue";
</script>
<template>
  <section
    id="home"
    class="container mb-20 pt-[91px] lg:max-w-[900px] lg:pt-[268px] xl:max-w-[1175px]"
  >
    <img
      id="logo-mobile"
      class="mx-auto mb-3 w-[253px] lg:hidden"
      src="@/assets/images/logo/logo.png"
      alt="small logo"
    />
    <h1
      class="mx-auto mb-6 w-[176px] rounded-[100px] bg-highlight py-1 text-center text-white lg:w-[314px]"
    >
      互動式網頁設計
    </h1>
    <AppParticipants />
  </section>
</template>
