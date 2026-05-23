<script setup lang="ts">
useSeoMeta({
  title: 'Om meg',
  description: 'Frontend-utvikler som deler det jeg lærer underveis. Fokus på Vue, Nuxt, TypeScript og moderne CSS.',
})

defineOgImage('NuxtSeo', {
  title: 'Om meg',
  description: 'Frontend-utvikler basert i Norge. Vue, Nuxt, TypeScript.',
  siteName: 'devblog',
})

useSchemaOrg([
  defineWebPage(),
])
</script>

<template>
  <div class="max-w-3xl">
    <p class="font-mono text-sm mb-6" style="color: #99FFE4;">
      <span style="color: #505050;">//</span> about.me
    </p>

    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
      Hei, jeg er <span class="text-[#FFC799]">Student</span>
    </h1>

    <p class="text-lg mb-8" style="color: #A0A0A0;">
      Frontend-utvikler som deler det jeg lærer underveis. Fokus på Vue, Nuxt, TypeScript og moderne CSS.
    </p>

    <!-- Terminal bio — Brutalist card -->
    <section
      class="rounded-2xl p-6 sm:p-8 border-2 font-mono text-sm leading-relaxed mb-8 transition-all hover:-translate-y-0.5"
      :style="{
        backgroundColor: '#161616',
        borderColor: '#282828',
      }"
      @mouseenter="$event.currentTarget.style.boxShadow = '4px 4px 0px 0px #99FFE4'"
      @mouseleave="$event.currentTarget.style.boxShadow = 'none'"
    >
      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">cat about.md</span>
      </div>

      <div class="ml-5 space-y-2 mb-5">
        <div>
          <span style="color: #FF8080;">&gt;</span>
          <span style="color: #99FFE4;"> "Frontend-utvikler basert i Norge"</span>
        </div>
        <div>
          <span style="color: #FF8080;">&gt;</span>
          <span style="color: #99FFE4;"> "Lærer Nuxt, Vue & TypeScript"</span>
        </div>
        <div>
          <span style="color: #FF8080;">&gt;</span>
          <span style="color: #99FFE4;"> "#bygg #lær #del"</span>
        </div>
      </div>

      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">stack.json</span>
      </div>
      <div class="ml-5 mb-5" style="color: #A0A0A0;">
        <span style="color: #FF8080;">&gt;</span>
        { "frontend": ["Vue", "Nuxt", "TypeScript", "Tailwind"], "backend": ["Node.js", "Postgres", "Nitro"] }
      </div>

      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">contact --socials</span>
      </div>
      <div class="ml-5 flex flex-wrap gap-x-2 gap-y-1" style="color: #A0A0A0;">
        <span style="color: #FF8080;">&gt;</span>
        <a href="https://github.com" target="_blank" class="no-underline font-bold hover:text-[#FFC799] transition-colors" style="color: #A0A0A0;">GitHub</a>
        <span>·</span>
        <a href="https://twitter.com" target="_blank" class="no-underline font-bold hover:text-[#FFC799] transition-colors" style="color: #A0A0A0;">Twitter</a>
        <span>·</span>
        <a href="https://linkedin.com" target="_blank" class="no-underline font-bold hover:text-[#FFC799] transition-colors" style="color: #A0A0A0;">LinkedIn</a>
      </div>
    </section>

    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none font-mono"
      :style="{
        borderColor: '#282828',
        color: '#A0A0A0',
      }"
    >
      <span class="font-mono">←</span>
      Tilbake til forsiden
    </NuxtLink>
  </div>
</template>
