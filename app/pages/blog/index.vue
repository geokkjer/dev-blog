<script setup lang="ts">
useSeoMeta({
  title: 'Blogg',
  description: 'Blogg om frontend-utvikling, Nuxt, Vue, TypeScript og moderne web-teknologier.',
})

defineOgImage('NuxtSeo', {
  title: 'Blogg',
  description: 'Frontend-utvikling, Nuxt, Vue, TypeScript og mer.',
  siteName: 'devblog',
})

useSchemaOrg([
  defineWebPage(),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Hjem', item: '/' },
      { name: 'Blogg', item: '/blog' },
    ],
  }),
])

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').all()
)
</script>

<template>
  <div>
    <p class="font-mono text-sm mb-4" style="color: #99FFE4;">
      <span style="color: #505050;">//</span> blog.posts
    </p>
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
      Blogg
    </h1>

    <div v-if="posts && posts.length" class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in posts"
        :key="post.id"
        class="group relative rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-none"
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

        <h2 class="text-lg font-bold mb-2 leading-snug tracking-tight">
          <NuxtLink
            :to="post.path"
            class="no-underline transition-colors group-hover:text-[#FFC799]"
            style="color: #FFF;"
          >
            {{ post.title }}
          </NuxtLink>
        </h2>
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

    <div v-else class="py-16 text-center">
      <p class="font-mono text-sm mb-2" style="color: #505050;">
        $ ls blog/<br/>
        <span style="color: #FF8080;">ls: cannot access 'blog/': No such files</span>
      </p>
      <p style="color: #A0A0A0;">
        Ingen bloggposter ennå.
      </p>
    </div>
  </div>
</template>
