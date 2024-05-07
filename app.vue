<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<script>
export default {
  mounted() {
    window.addEventListener('beforeunload', this.eliminarVariable);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.eliminarVariable);
  },
  methods: {
    eliminarVariable() {
      localStorage.removeItem('mercadopago1');
    }
  }
}

</script>
