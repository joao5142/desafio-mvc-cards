<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap");

/*##RESET*/
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  height: auto;
}

button,
input,
textarea {
  border: 0;
  outline: none;
}

button:focus,
input:focus,
textarea:focus {
  border: 0;
  outline: none;
}

body {
  font-family: "Poppins", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#app > * {
  flex: 1;
}

/* ## UTIL CLASSES */
.icon {
  border-radius: 50%;

  padding: 20px;
  display: flex;
  justify-content: center;
}

/*##VARIABLES*/
:root {
  --blue-dark-color: #24307b;
  --blue-light-color: #4e75ea;
  --blue-200-color: #5373eb;
  --blue-light-400-color: #666ff0;
  --purple-color: #7c69f7;
  --yellow-color: #ffc773;
  --red-color: #e64336;
  --red-dark-color: #dd2b45;
  --gray-color: #575757;
  --gray-400-color: #878787;
  --dark-color: #000000;
}
</style>
