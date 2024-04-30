<template>
  <div>
    <a class="whatsapp-button" href="https://api.whatsapp.com/send?phone=51941238451&text=%C2%A1Hola%20Qillari!%20%F0%9F%91%8B%F0%9F%8F%BC%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20joyas%3F%F0%9F%92%8D">
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        style="width: 60px; height: 60px"
      />
    </a>
  </div>
</template>
<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 50;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.whatsapp-button:hover {
  transform: scale(1.2);
}
</style>
