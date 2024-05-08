<template>
  <div>
    <div class="fixed"></div>
    <div class="cuadro">
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h2>Nosotros</h2>
              <p align="justify">
                Descubre la magia de la plata en nuestra colección de joyería
                exquisita! Sumérgete en un mundo de elegancia atemporal y
                sofisticación con nuestras piezas cuidadosamente seleccionadas,
                perfecta para elevar cualquier ocasión.
              </p>
              <NuxtLink to="/productos">
                <button>LO QUIERO</button>
              </NuxtLink>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 720px) {
  .col-6 {
    text-align: center;
    width: 100%;
  }
  button:hover {
    transform: scale(1.2);
    font-weight: bold;
  }
}
@media screen and (min-width: 721px) and (max-width: 960px) {
  .col-6 {
    width: 75%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
@media screen and (min-width: 961px) {
  .col-6 {
    width: 50%;
  }
  button:hover {
    transform: scale(1.2);
    margin-left: 10px;
    font-weight: bold;
  }
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/public/inicio/parte4/nosotros.webp");
  background-position: center;
  z-index: 1;
}
.cuadro {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
  align-items: center;
  height: 100%;
}
p,
h2 {
  color: white;
}
button {
  width: 160px;
  height: 30px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.897);
  border-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
}
button:hover {
  transform: scale(1.2);
  font-weight: bold;
}
</style>
