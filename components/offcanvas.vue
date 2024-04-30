<template>
  <div>
    <button
      @click="toggleSidebar"
      class="button-navigation"
      title="Menu de inicio"
      style="position: relative; z-index: 1"
    >
      <img src="/menu.ico" class="menu" alt="Menu" />
    </button>
    <div
      class="offcanvas-overlay"
      :class="{ active: showSidebar }"
      @click="closeSidebar"
    ></div>
    <div class="offcanvas" :class="{ active: showSidebar }">
      <button
        style="padding-top: 15px; font-size: 30px"
        class="close-button"
        @click="closeSidebar"
      >
        &times;
      </button>
      <div style="width: 100%">
        <div class="container">
          <br />
          <br />
          <div class="row">
            <div
              v-for="section in sections"
              :key="section.id"
              :class="section.class"
            >
              <NuxtLink class="nuxt" :to="section.to" @click="closeSidebar">
                <div class="padding">{{ section.label }}</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .menu {
    max-width: 30px;
  }
}
.menu {
  height: 100%;
  width: 100%;
  max-height: 37px;
  object-fit: contain;
}
.padding {
  padding-bottom: 4px;
  padding-top: 4px;
}
.nuxt {
  text-decoration: none;
  color: black;
  width: 100%;
}
.hover {
  transition: background-color 0.3s ease;
}
.hover:hover {
  background-color: rgb(199, 199, 199);
}
.button-navigation {
  position: relative;
  border: none;
  cursor: pointer;
  background-color: transparent;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.button-navigation:hover {
  opacity: 1;
}
.offcanvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
  z-index: 2;
}

.offcanvas-overlay.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}

.offcanvas {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  transform: translateX(0);
  transition: transform 0.3s;
  z-index: 3;
}
.offcanvas.active {
  transform: translateX(100%);
  transition: transform 0.3s;
}

.container {
  width: 98%;
  padding-right: 1%;
  padding-left: 1%;
  margin-right: auto;
  margin-left: auto;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  margin-right: 0;
}
.col-1 {
  width: 6.33%;
  padding-left: 1%;
  padding-right: 1%;
}
.col-12 {
  width: 98%;
  padding-left: 1%;
  padding-right: 1%;
}
</style>

<script>
export default {
  data() {
    return {
      screenWidth: 0,
      showSidebar: false,
      sections: [
      {
          id: 0,
          label: "Productos",
          to: "/productos",
          class: "col-12 hover",
        },
        {
          id: 1,
          label: "Anillos",
          to: "/productos/anillos",
          class: "col-12 hover",
        },
        {
          id: 2,
          label: "Aretes",
          to: "/productos/aretes",
          class: "col-12 hover",
        },
        {
          id: 3,
          label: "Collares",
          to: "/productos/collares",
          class: "col-12 hover",
        },
        {
          id: 4,
          label: "Pulseras",
          to: "/productos/pulseras",
          class: "col-12 hover",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
      document.body.style.overflow = this.showSidebar ? "hidden" : "";
    },
    closeSidebar() {
      this.showSidebar = false;
      document.body.style.overflow = "";
    },
    handleResize() {
      if (window.innerWidth >= 1080) {
        this.closeSidebar();
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
