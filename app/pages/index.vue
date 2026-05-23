<script setup lang="ts">
useSeoMeta({
  title: 'En utviklers reise',
  description: 'En utviklers reise gjennom frontend-arkitektur, komponentdesign og moderne web-teknologier. Blogg om Vue, Nuxt, TypeScript og mer.',
})

defineOgImage('NuxtSeo', {
  title: 'devblog',
  description: 'En utviklers reise gjennom frontend-arkitektur, komponentdesign og moderne web-teknologier.',
  siteName: 'devblog',
})

useSchemaOrg([
  defineWebPage(),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Hjem', item: '/' },
    ],
  }),
])

const { data: posts } = await useAsyncData('home-posts', () =>
  queryCollection('blog').limit(3).all()
)

const { data: projects } = await useAsyncData('home-projects', () =>
  queryCollection('projects').all()
)

const statusColors: Record<string, string> = {
  active: '#99FFE4',
  wip: '#FFC799',
  archived: '#505050',
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <p class="font-mono text-sm mb-4" style="color: #99FFE4;">
        <span style="color: #505050;">//</span> developer.log
      </p>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
        Building things<br/>
        with <span class="text-[#FFC799]">Nuxt &amp; Vue</span>
      </h1>
      <p class="text-lg max-w-lg mb-8" style="color: #A0A0A0;">
        En utviklers reise gjennom frontend-arkitektur, komponentdesign og moderne web-teknologier.
      </p>

      <!-- Brutalist CTA button -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-1 active:translate-y-0 active:shadow-none"
        :style="{
          backgroundColor: '#1C1C1C',
          borderColor: '#FFC799',
          color: '#FFC799',
          boxShadow: '4px 4px 0px 0px #FFC799',
        }"
      >
        <span>Les bloggen</span>
        <span class="font-mono">→</span>
      </NuxtLink>
    </section>

    <!-- Siste artikler -->
    <section class="py-8 sm:py-12">
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-bold text-xl tracking-tight">
          📦 Siste artikler
        </h2>
        <span class="font-mono text-xs" style="color: #505050;">
          {{ posts?.length || 0 }} / {{ posts?.length || 0 }}
        </span>
      </div>

      <div v-if="posts && posts.length" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="group relative rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-none cursor-pointer"
          :style="{
            backgroundColor: '#161616',
            borderColor: '#282828',
          }"
          @mouseenter="$event.currentTarget.style.boxShadow = '6px 6px 0px 0px #FFC799'; $event.currentTarget.style.borderColor = '#FFC799'"
          @mouseleave="$event.currentTarget.style.boxShadow = 'none'; $event.currentTarget.style.borderColor = '#282828'"
        >
          <div class="font-mono text-xs mb-4 flex flex-wrap gap-1.5" style="color: #505050;">
            <span
              v-for="(tag, i) in post.tags"
              :key="tag"
              class="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
              :style="{
                color: i % 2 === 0 ? '#FFC799' : '#99FFE4',
                borderColor: i % 2 === 0 ? 'rgba(255,199,153,0.2)' : 'rgba(153,255,228,0.2)',
              }"
            >
              {{ tag }}
            </span>
          </div>

          <h3 class="text-lg font-bold mb-2 leading-snug tracking-tight">
            <NuxtLink
              :to="post.path"
              class="no-underline transition-colors group-hover:text-[#FFC799]"
              style="color: #FFF;"
            >
              {{ post.title }}
            </NuxtLink>
          </h3>
          <p class="text-sm mb-4" style="color: #A0A0A0;">
            {{ post.description }}
          </p>

          <div class="flex items-center justify-between">
            <span class="font-mono text-xs" style="color: #505050;">{{ post.date || '' }}</span>
            <NuxtLink
              :to="post.path"
              class="font-mono text-xs font-bold no-underline transition-colors hover:text-[#FFCFA8]"
              style="color: #FFC799;"
            >
              → les mer
            </NuxtLink>
          </div>
        </article>
      </div>

      <div v-if="posts && posts.length" class="mt-8 text-center">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
          :style="{
            borderColor: '#282828',
            color: '#A0A0A0',
          }"
        >
          Se alle artikler
          <span class="font-mono">→</span>
        </NuxtLink>
      </div>

      <p v-else style="color: #A0A0A0;">
        Ingen bloggposter ennå.
      </p>
    </section>

    <!-- Prosjekter -->
    <section class="py-8 sm:py-12">
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-bold text-xl tracking-tight">
          🛠️ Prosjekter jeg jobber med
        </h2>
        <NuxtLink
          to="/projects"
          class="font-mono text-xs font-bold no-underline hover:text-[#FFC799] transition-colors"
          style="color: #505050;"
        >
          Se alle →
        </NuxtLink>
      </div>

      <div v-if="projects && projects.length" class="grid gap-5 sm:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.id"
          class="group relative rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-none"
          :style="{
            backgroundColor: '#161616',
            borderColor: '#282828',
          }"
          @mouseenter="$event.currentTarget.style.boxShadow = '6px 6px 0px 0px #FFC799'; $event.currentTarget.style.borderColor = '#FFC799'"
          @mouseleave="$event.currentTarget.style.boxShadow = 'none'; $event.currentTarget.style.borderColor = '#282828'"
        >
          <div class="flex items-start justify-between mb-3">
            <span class="text-2xl">{{ project.icon || '📦' }}</span>
            <div class="flex items-center gap-1.5">
              <span
                class="inline-block w-2 h-2 rounded-full"
                :style="{ backgroundColor: statusColors[project.status] || '#505050' }"
              />
              <span
                class="font-mono text-[10px] font-bold uppercase tracking-wider"
                :style="{ color: statusColors[project.status] || '#505050' }"
              >
                {{ project.status }}
              </span>
            </div>
          </div>

          <h3 class="text-lg font-bold mb-1 tracking-tight">
            <NuxtLink
              :to="project.path"
              class="no-underline transition-colors group-hover:text-[#FFC799]"
              style="color: #FFF;"
            >
              {{ project.title }}
            </NuxtLink>
          </h3>
          <p class="text-sm mb-4" style="color: #A0A0A0;">
            {{ project.description }}
          </p>

          <div class="flex items-center justify-between">
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="font-mono text-xs no-underline transition-colors hover:text-[#FFC799]"
              style="color: #505050;"
              @click.stop
            >
              {{ project.url.replace('https://', '') }} ↗
            </a>
            <span v-else />
            <NuxtLink
              :to="project.path"
              class="font-mono text-xs font-bold no-underline transition-colors hover:text-[#FFCFA8]"
              style="color: #FFC799;"
            >
              → les mer
            </NuxtLink>
          </div>
        </article>
      </div>

      <p v-else style="color: #A0A0A0;">
        Ingen prosjekter ennå.
      </p>
    </section>

    <!-- Terminal About — Brutalist card -->
    <section
      class="rounded-2xl p-6 sm:p-8 border-2 font-mono text-sm leading-relaxed mb-4 transition-all hover:-translate-y-0.5"
      :style="{
        backgroundColor: '#161616',
        borderColor: '#282828',
      }"
      @mouseenter="$event.currentTarget.style.boxShadow = '4px 4px 0px 0px #99FFE4'"
      @mouseleave="$event.currentTarget.style.boxShadow = 'none'"
    >
      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">whoami</span>
      </div>
      <div class="mb-5 ml-5">
        <span style="color: #FF8080;">&gt;</span>
        <span style="color: #99FFE4;"> "Frontend-utvikler / Nuxt-entusiast"</span>
      </div>

      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">skills --list</span>
      </div>
      <div class="mb-5 ml-5" style="color: #A0A0A0;">
        <span style="color: #FF8080;">&gt;</span>
        [Vue, Nuxt, TypeScript, Tailwind, Node.js, Postgres]
      </div>

      <div class="mb-3">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">contact</span>
      </div>
      <div class="ml-5 flex flex-wrap gap-x-2 gap-y-1" style="color: #A0A0A0;">
        <span style="color: #FF8080;">&gt;</span>
        <a href="https://github.com" target="_blank" class="no-underline font-bold hover:text-[#FFC799] transition-colors" style="color: #A0A0A0;">GitHub</a>
        <span>·</span>
        <a href="https://twitter.com" target="_blank" class="no-underline font-bold hover:text-[#FFC799] transition-colors" style="color: #A0A0A0;">Twitter</a>
        <span>·</span>
        <span>LinkedIn</span>
      </div>
    </section>
  </div>
</template>
