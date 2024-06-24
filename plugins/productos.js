import axios from 'axios'

export default defineNuxtPlugin(async nuxtApp => {
  const api = axios.create({
    baseURL: 'https://backend-phi-gules.vercel.app',
  })

  let data = []

  try {
    const response = await api.get('/crud-stock')
    data = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }

  nuxtApp.provide('data', data)
})
