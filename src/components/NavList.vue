<template>
  <ul v-bind:class="{ active: isMenuActive }">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/card1">Card1</router-link>
    </li>

    <li>
      <router-link to="/card2">Card2</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavList",
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      isMenuActive: this.isActive,
    };
  },
  mounted() {
    console.log("Nav List:" + this.isActive);
  },
};
</script>

<style scoped >
ul {
  display: flex;
  gap: 30px;
  align-items: center;
}
ul.active {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

a {
  color: var(--blue-dark-color);
}
li {
  position: relative;
  padding: 10px;
}
a:hover {
  color: var(--purple-color);
  transition: all 0.7s linear;
}

@media (max-width: 520px) {
  ul {
    display: none;
  }
}
</style>