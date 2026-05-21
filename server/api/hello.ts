export default defineEventHandler(() => {
  return {
    message: 'Hei fra Nuxt API!',
    timestamp: new Date().toISOString()
  }
})