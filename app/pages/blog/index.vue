<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').all()
)
</script>
<template>
  <div>
    <h1>Blogg</h1>
    <div v-if="posts && posts.length">
      <article v-for="post in posts" :key="post.id">
        <h2>
          <NuxtLink :to="post.path">
            {{ post.title }}
          </NuxtLink>
        </h2>
        <p>{{ post.description }}</p>
        <time>{{ post.date }}</time>
      </article>
    </div>
    <p v-else>Ingen bloggposter ennå.</p>
  </div>
</template>