<script setup lang="ts">
useSeoMeta({
  title: 'Prosjekter',
  description: 'Prosjekter jeg jobber med — Vue, Nuxt, TypeScript og moderne web-teknologier.',
})

defineOgImage('NuxtSeo', {
  title: 'Prosjekter',
  description: 'Aktive og arkiverte prosjekter innen frontend-utvikling.',
  siteName: 'devblog',
})

useSchemaOrg([
  defineWebPage(),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Hjem', item: '/' },
      { name: 'Prosjekter', item: '/projects' },
    ],
  }),
])

const { data: projects } = await useAsyncData('projects-list', () =>
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
    <p class="font-mono text-sm mb-4" style="color: #99FFE4;">
      <span style="color: #505050;">//</span> projects
    </p>
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
      Prosjekter
    </h1>

    <div v-if="projects && projects.length" class="grid gap-5 md:grid-cols-2">
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
        <!-- Header: icon + status -->
        <div class="flex items-start justify-between mb-4">
          <span class="text-3xl">{{ project.icon || '📦' }}</span>
          <div class="flex items-center gap-2">
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

        <!-- Tags -->
        <div class="font-mono text-xs mb-3 flex flex-wrap gap-1.5" style="color: #505050;">
          <span
            v-for="(tag, i) in project.tags"
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

        <!-- Title -->
        <h2 class="text-xl font-bold mb-2 tracking-tight">
          <NuxtLink
            :to="project.path"
            class="no-underline transition-colors group-hover:text-[#FFC799]"
            style="color: #FFF;"
          >
            {{ project.title }}
          </NuxtLink>
        </h2>
        <p class="text-sm mb-4" style="color: #A0A0A0;">
          {{ project.description }}
        </p>

        <!-- Footer: URL + read more -->
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

    <div v-else class="py-16 text-center">
      <p class="font-mono text-sm mb-2" style="color: #505050;">
        $ ls projects/<br/>
        <span style="color: #FF8080;">ls: cannot access 'projects/': No such files</span>
      </p>
      <p style="color: #A0A0A0;">
        Ingen prosjekter ennå.
      </p>
    </div>
  </div>
</template>
