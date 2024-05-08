<template>
  <div>
    <nav class="navbar" :class="{ navbar1: showBackground }">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand" title="Página de inicio">
          <img
            src="/logo.png"
            style="width: 100%; height: 42px; object-fit: contain"
            alt="Logo"
            loading="lazy"
          />
        </NuxtLink>
        <ul class="navbar-nav">
          <li
            v-for="section in sections"
            :key="section.id"
            class="nav-item link1"
          >
            <NuxtLink class="nav-link" :to="section.to">
              {{ section.label }}
            </NuxtLink>
          </li>
          <li>
            <div>
              <LazyCarrito />
            </div>
          </li>
          <li class="nav-item offcan">
            <div class="nav-link offcan" style="opacity:1">
              <LazyOffcanvas />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@media screen and (min-width: 720px) {
  .nav-link.offcan {
    display: none;
  }
  .nav-item.offcan {
    display: none;
  }
}
@media screen and (max-width: 721px) {
  .nav-link.link1 {
    display: none;
  }
  .nav-item.link1 {
    display: none;
  }
}
.input1 {
  padding: 8px;
  margin-right: 40px;
  width: 100%;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 12px;
  background-color: transparent;
  padding-top: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: background-color 0.3s;
  background-color: black;
}
.navbar1 {
  background-color: black;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  font-weight: bold;
  color: #333333;
  text-decoration: none;
  padding-top: 5px;
  padding-left: 2%;
}
.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-item {
  margin-right: 15px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.nav-link {
  font-size: 20px;
  opacity: 0.7;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}
.nav-link.router-link-exact-active {
  opacity: 1;
}
.nav-link:hover {
  opacity: 1;
}
</style>

<script>
export default {
  data() {
    return {
      showBackground: false,
      sections: [
        { id: 1, label: "Aretes", to: "/productos/aretes/" },
        { id: 2, label: "Anillos", to: "/productos/anillos/", align: "center" },
        {
          id: 3,
          label: "Collares",
          to: "/productos/collares/",
          align: "center",
        },
        { id: 4, label: "Pulseras", to: "/productos/pulseras/" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showBackground =
        window.pageYOffset > 20 || document.body.style.position === "fixed";
    },
    scrollTo(nombre) {
      const targetElement = document.querySelector(nombre);
      const offset = 60;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    },
  },
};
</script>
