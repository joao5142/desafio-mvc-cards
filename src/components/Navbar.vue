<template>
  <header>
    <nav class="container">
      <router-link to="/">
        <img class="logo" src="../assets/logo.png" alt="" />
      </router-link>

      <NavList />

      <img
        v-on:click="showMenu"
        class="hamburguer"
        src="../assets/bars-solid.svg"
      />
    </nav>

    <div class="nav-hamburguer">
      <NavList v-if="isMenuActive" isActive="true" />
    </div>
  </header>
</template>

<script>
import NavList from "../components/NavList.vue";

export default {
  name: "Navbar",
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    showMenu() {
      this.isMenuActive = !this.isMenuActive;
      console.log(this.isMenuActive);
    },
  },
  components: {
    NavList,
  },
};
</script>

<style scoped >
header {
  padding: 20px 20px;
}
nav {
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 110px;
}

.hamburguer {
  width: 32px;
  cursor: pointer;
  display: none;
}

@media (min-width: 520px) {
  .nav-hamburguer {
    display: none;
  }
}

@media (max-width: 520px) {
  .hamburguer {
    display: block;
  }
}
</style>