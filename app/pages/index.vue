<script setup lang="ts">
const { data: posts } = await useAsyncData('home-posts', () =>
  queryCollection('blog').limit(3).all()
)


</script>

<template>
  <div>
    <h1>Dev Blog</h1>
    <p>En blogg om frontend-utvikling.</p>
    <section v-if="posts && posts.length">
      <h2>Siste artikler</h2>
      <article v-for="post in posts" :key="post.id">
        <h3>
          <NuxtLink :to="post.path">
            {{ post.title }}
          </NuxtLink>
        </h3>
        <p>{{ post.description }}</p>
      </article>

    </section>
    <NuxtLink to="/blog">Alle artikler →</NuxtLink>
  </div>
</template>