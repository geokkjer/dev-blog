<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  colorMode?: "light" | "dark"
  isPro?: boolean
}>(), {
  title: "devblog",
  colorMode: "dark",
  isPro: false,
})

const themeColor = computed(() => "255, 199, 153")
</script>

<template>
  <div
    class="w-full h-full justify-center items-center relative p-10 lg:p-[60px] bg-[#101010] text-white"
  >
    <!-- Gradient background -->
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 100% 100%, rgba(${themeColor}, 0.12) 0%, transparent 60%)`
}"
    />
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 0.1% 0.1%, rgba(${themeColor}, 0.08) 0%, transparent 50%)`
}"
    />

    <div class="w-full flex-col justify-center relative items-center text-center gap-5 lg:gap-8">
      <!-- Logo - devblog brand mark -->
      <div class="flex items-center gap-1">
        <svg viewBox="0 0 32 32" class="w-10 h-10 lg:w-14 lg:h-14">
          <rect width="32" height="32" rx="4" fill="#101010"/>
          <path d="M6 10l6 6-6 6" stroke="#FFC799" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 22h10" stroke="#99FFE4" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </svg>
        <span class="text-[32px] lg:text-[40px] font-bold tracking-tight text-[#FFC799]" style="font-family: 'Syne', sans-serif;">
          devblog
        </span>
      </div>

      <!-- Title -->
      <h1
        class="w-full justify-center text-center text-[48px] lg:text-[72px] font-bold m-0 leading-tight max-w-[700px] lg:max-w-[1000px]"
        style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance;"
      >
        {{ title }}
      </h1>

      <!-- Description -->
      <p
        v-if="description"
        class="text-[24px] lg:text-[32px] max-w-[650px] lg:max-w-[900px] leading-relaxed"
        style="display: block; line-clamp: 2; text-overflow: ellipsis; color: #A0A0A0;"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
