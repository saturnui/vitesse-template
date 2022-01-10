import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const name = ref(import.meta.env.APP_NAME)

  const componentPages = [
    { title: 'Home', to: '/' },
  ]

  return {
    componentPages,
    name,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
