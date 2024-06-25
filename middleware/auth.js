export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('token');
    if (!token || token !== 'm1c93nd0wmf38fje1') {
      return navigateTo('/login');
    }
  }
});