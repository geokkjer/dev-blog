<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection('projects').path(`/projects/${slug}`).first()
)
useHead({
  title: project.value ? project.value.title : 'Prosjekt ikke funnet',
  meta: [
    {
      name: 'description',
      content: project.value ? project.value.description : 'Fant ikke prosjektet'
    }
  ]
})

const statusColors: Record<string, string> = {
  active: '#99FFE4',
  wip: '#FFC799',
  archived: '#505050',
}
</script>

<template>
  <div v-if="project" class="max-w-3xl">
    <!-- Status + tags -->
    <div class="flex items-center gap-3 mb-4 flex-wrap">
      <div class="flex items-center gap-1.5">
        <span
          class="inline-block w-2 h-2 rounded-full"
          :style="{ backgroundColor: statusColors[project.status] || '#505050' }"
        />
        <span
          class="font-mono text-[10px] font-bold uppercase tracking-wider"
          :style="{ color: statusColors[project.status] || '#505050' }"
        >
          {{ project.status || 'active' }}
        </span>
      </div>
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
    <div class="flex items-center gap-3 mb-3">
      <span class="text-3xl">{{ project.icon || '📦' }}</span>
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ project.title }}
      </h1>
    </div>
    <p class="text-lg mb-6" style="color: #A0A0A0;">
      {{ project.description }}
    </p>

    <!-- URL -->
    <a
      v-if="project.url"
      :href="project.url"
      target="_blank"
      class="inline-flex items-center gap-2 px-4 py-2 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none mb-8"
      :style="{
        backgroundColor: '#1C1C1C',
        borderColor: '#FFC799',
        color: '#FFC799',
        boxShadow: '3px 3px 0px 0px #FFC799',
      }"
    >
      <span>📖</span>
      <span>Kildekode</span>
      <span class="font-mono text-xs">↗</span>
    </a>

    <!-- Content -->
    <div class="prose prose-invert max-w-none mb-12">
      <ContentRenderer :value="project" />
    </div>

    <!-- Back link -->
    <NuxtLink
      to="/projects"
      class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none font-mono"
      :style="{
        borderColor: '#282828',
        color: '#A0A0A0',
      }"
    >
      <span class="font-mono">←</span>
      Alle prosjekter
    </NuxtLink>
  </div>

  <!-- 404 -->
  <div v-else class="py-16 text-center">
    <p class="font-mono text-sm mb-2" style="color: #505050;">
      $ cat /projects/{{ slug }}.md
    </p>
    <p style="color: #FF8080;">Fant ikke prosjektet</p>
    <NuxtLink
      to="/projects"
      class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none font-mono mt-4"
      :style="{
        borderColor: '#282828',
        color: '#A0A0A0',
      }"
    >
      <span class="font-mono">←</span>
      Alle prosjekter
    </NuxtLink>
  </div>
</template>
