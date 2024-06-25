export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('token');
    if (!token || token !== 'contraseña1') {
      return navigateTo('/login');
    }
  }
});