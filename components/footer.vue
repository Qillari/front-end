<template>
  <div class="background">
    <br />
    <div class="container">
      <div>
        <div class="flex">
          <a href="https://www.facebook.com/Qillari">
            <picture>
              <source
                srcset="/facebook.webp"
                class="imagen"
                media="(min-width: 500px)"
                alt="logo de facebook"
                loading="lazy"
              />
              <img
                src="/facebook.webp"
                class="imagen"
                alt="logo de facebook"
                loading="lazy"
              />
            </picture>
          </a>
          <a
            href="https://www.instagram.com/qillarijewelry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <picture>
              <source
                srcset="/instagram.webp"
                class="imagen"
                media="(min-width: 500px)"
                alt="logo de instagram"
                loading="lazy"
              />
              <img
                src="/instagram.webp"
                class="imagen"
                alt="logo de instagram"
                loading="lazy"
              /> </picture
          ></a>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 359px) {
  .flex {
    display: flex;
    gap: 20px;
    height: 100%;
  }
}
@media screen and (min-width: 360px) {
  .flex {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
  }
  .columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 10px;
  }
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
}
h2 {
  margin-top: 0;
}
h2,
p {
  color: white;
}
.background {
  background-color: black;
}
.imagen {
  max-width: 45px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: invert(100%);
}
.before-enter {
  opacity: 0;
  transform: translateX(100px);
  transition: all 1s ease-out;
}
.enter {
  opacity: 1;
  transform: translateX(0px);
}
</style>
