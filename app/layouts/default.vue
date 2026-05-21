<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Dev Blog</NuxtLink>
        <NuxtLink to="/blog">Blogg</NuxtLink>
        <NuxtLink to="/about">Om</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>Dev Blog &copy; 2026</p>
    </footer>
  </div>
</template>
<style scoped>
header {
  background-color: #333;
  padding: 1rem;
}

nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}

main {
  padding: 2rem;
  flex: auto;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>