export default defineEventHandler(() => {
  return {
    posts: [{
      id: 1,
      title: 'Fra Vue til Nuxt',
      slug: 'vue-til-nuxt'
    }, {
      id: 2,
      title: 'SSR for nybegynnere',
      slug: 'ssr-for-nybegynnere'
    }, {
      id: 3,
      title: 'File-based routing',
      slug: 'file-based-routing'
    }],
    message: 'Dette er en liste over blogginnlegg'
  }
})