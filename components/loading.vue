<template>
    <div class="loading-screen">
      <div class="loading-overlay"></div>
      <div class="loading-spinner"></div>
    </div>
  </template>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7); /* Fondo oscurecido */
    z-index: 99
  }
  
  .loading-overlay {
    /* Estilo para el fondo oscurecido */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .loading-spinner {
    /* Estilo para la bolita de carga (puedes usar una animación CSS o una librería como Spin.js) */
    border: 4px solid #fff;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  
  .loading-message {
    /* Estilo para el mensaje "Cargando..." */
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  