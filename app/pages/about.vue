<script setup lang="ts">
const { data: apiData, pending } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <h1>Om meg</h1>
    <p>Frontend-utvikler som lærer Nuxt.</p>
    <section v-if="!pending && apiData">
      <h2>API-test</h2>
      <p>API sier: {{ apiData.message }}</p>
    </section>
    <NuxtLink to="/">Tilbake</NuxtLink>
  </div>
</template>