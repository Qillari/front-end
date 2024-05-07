<!-- pages/checkout-success.vue -->

<template>
  <div class="checkout-success">
    <div class="success-message">
      <h1>¡Pago completado!</h1>
      <p>Gracias por su compra. Su pedido ha sido procesado correctamente.</p>
    </div>
  </div>
</template>

<style scoped>
.checkout-success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.success-message {
  text-align: center;
}

.success-message h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.success-message p {
  font-size: 1.2rem;
}
</style>
