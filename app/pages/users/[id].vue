<template>
  <h1> bruker: {{ id }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string
</script>