<script setup lang="ts">
useSeoMeta({
  title: 'Kontakt',
  description: 'Kontakt meg for spørsmål om frontend-utvikling, Vue, Nuxt eller samarbeid.',
})

defineOgImage('NuxtSeo', {
  title: 'Kontakt',
  description: 'Frontend-utvikler tilgjengelig for spørsmål og samarbeid.',
  siteName: 'devblog',
})

useSchemaOrg([
  defineWebPage(),
])
</script>

<template>
  <div class="max-w-2xl">
    <p class="font-mono text-sm mb-4" style="color: #99FFE4;">
      <span style="color: #505050;">//</span> contact
    </p>
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
      Kontakt
    </h1>

    <section
      class="rounded-lg p-6 sm:p-8 border font-mono text-sm leading-relaxed"
      :style="{
        backgroundColor: '#161616',
        borderColor: '#282828',
      }"
    >
      <div class="mb-2">
        <span style="color: #99FFE4;">$ </span>
        <span style="color: #FFF;">send --to mail</span>
      </div>
      <div class="ml-5">
        <span style="color: #FF8080;">&gt;</span>
        <UButton
          to="mailto:mail@mail.com"
          variant="link"
          color="neutral"
          class="font-mono !text-[#A0A0A0] hover:!text-[#FFC799] !p-0 !h-auto"
        >
          mail@mail.com
        </UButton>
      </div>
    </section>

    <UButton
      to="/"
      color="neutral"
      variant="ghost"
      class="font-mono text-sm mt-6"
      icon="i-heroicons-arrow-left-20-solid"
    >
      Tilbake til forsiden
    </UButton>
  </div>
</template>
