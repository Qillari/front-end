<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column">
    <LazyNavbar />
    <slot />
    <LazyBotonWha />
    <Footer style="z-index: 10; position: relative; margin-top: auto" />
  </div>
</template>
<script>
export default {
  unmounted() {
    localStorage.removeItem('mercadopago1');
  }
}
</script>