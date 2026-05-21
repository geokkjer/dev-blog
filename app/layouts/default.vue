<script setup lang="ts">
const links = [
  { label: 'Hjem', to: '/' },
  { label: 'Blogg', to: '/blog' },
  { label: 'Prosjekter', to: '/projects' },
  { label: 'Om', to: '/about' },
]
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header
      class="border-b-2 h-14 sm:h-16 flex items-center sticky top-0 z-50"
      :style="{ backgroundColor: '#101010', borderColor: '#282828' }"
    >
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <NuxtLink
          to="/"
          class="font-bold text-lg tracking-tight no-underline rounded-lg px-2 py-1 transition-all hover:-translate-y-0.5 active:translate-y-0"
          style="font-family: 'Syne', sans-serif; color: #FFC799;"
        >
          devblog
        </NuxtLink>
        <nav class="flex items-center gap-1 sm:gap-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="px-3 sm:px-4 py-2 text-sm font-bold no-underline rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
            :style="{
              color: $route.path === link.to ? '#FFF' : '#A0A0A0',
              backgroundColor: $route.path === link.to ? '#1C1C1C' : 'transparent',
              borderColor: $route.path === link.to ? '#FFC799' : '#282828',
              boxShadow: $route.path === link.to ? '3px 3px 0px 0px #FFC799' : 'none',
            }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="border-t-2 py-6 text-center font-mono text-xs"
      :style="{ borderColor: '#282828', color: '#505050' }"
    >
      <div class="max-w-[1100px] mx-auto px-4">
        // dev-blog &copy; 2026 — built with Nuxt 4 + Vesper
      </div>
    </footer>
  </div>
</template>
