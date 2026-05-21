<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog').path(`/blog/${slug}`).first()
)
useHead({
  title: post.value ? post.value.title : 'Artikkel ikke funnet',
  meta: [
    {
      name: 'description',
      content: post.value ? post.value.description : 'Fant ikke artikkelen'
    }
  ]
})
</script>

<template>
  <div v-if="post" class="max-w-3xl">
    <!-- Tags -->
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

    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
      {{ post.title }}
    </h1>

    <!-- Meta -->
    <div class="font-mono text-sm mb-8" style="color: #505050;">
      <span v-if="post.author">{{ post.author }}</span>
      <span v-if="post.author && post.date"> · </span>
      <time v-if="post.date">{{ post.date }}</time>
    </div>

    <!-- Content -->
    <div class="prose prose-invert max-w-none mb-12">
      <ContentRenderer :value="post" />
    </div>

    <!-- Back link — brutalist style -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none font-mono"
      :style="{
        borderColor: '#282828',
        color: '#A0A0A0',
      }"
    >
      <span class="font-mono">←</span>
      Tilbake til bloggen
    </NuxtLink>
  </div>

  <!-- 404 state -->
  <div v-else class="py-16 text-center">
    <p class="font-mono text-sm mb-2" style="color: #505050;">
      $ cat /blog/{{ slug }}.md
    </p>
    <p style="color: #FF8080;">Fant ikke artikkelen</p>
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 px-5 py-2.5 font-bold text-sm rounded-xl border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none font-mono mt-4"
      :style="{
        borderColor: '#282828',
        color: '#A0A0A0',
      }"
    >
      <span class="font-mono">←</span>
      Tilbake til bloggen
    </NuxtLink>
  </div>
</template>
