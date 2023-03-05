<template>
  <div id="signals" class="fixed top-[75%] right-0 lg:top-[55%]">
    <img
      class="relative z-10 w-[120px] lg:w-[275px]"
      src="@/assets/images/main/ready_frame.png"
      alt="ready_frame"
    />
    <img
      id="signal-red"
      class="absolute top-[28%] left-[12%] w-[22px] lg:w-[49px]"
      src="@/assets/images/main/ready_3.png"
      alt="ready_3"
    />
    <img
      id="signal-yellow"
      class="absolute left-[35%] top-[28%] w-[22px] lg:w-[49px]"
      src="@/assets/images/main/ready_2.png"
      alt="ready_2"
    />
    <img
      id="signal-green"
      class="absolute top-[28%] left-[60%] w-[22px] lg:w-[49px]"
      src="@/assets/images/main/ready_1.png"
      alt="ready_1"
    />
    <p
      id="signal-text"
      class="absolute -top-6 left-6 text-highlight lg:left-16 lg:-top-10 lg:text-4xl"
    >
      READY?
    </p>
  </div>
</template>
