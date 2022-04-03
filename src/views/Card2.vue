<template>
  <div class="d-flex justify-content-center mb-5">
    <div class="mvc-card">
      <div class="mvc-card-head">
        <p class="mvc-card-title">Redes sociais</p>
        <img src="../assets/logo-instagram.svg" />
        <img src="../assets/logo-youtube-small.svg" />
      </div>
      <div class="mvc-card-text">
        <p>Fique por dentro de todas as novidades em nossas redes sociais!</p>
      </div>
      <div class="card-socials">
        <Social image="logo-enem" text-color="blue" image-color="purple" />
        <Social image="logo-book" text-color="blue-dark" image-color="blue" />
        <Social
          image="logo-youtube-medium"
          text-color="red"
          image-color="red"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Social from "../components/Social.vue";
export default {
  name: "Card2",
  components: {
    Social,
  },
};
</script>

<style scoped>
.mvc-card {
  border: 1px solid var(--yellow-color);
  width: 350px;
  height: 400px;
  padding: 30px;
  border-radius: 10px;
}
.mvc-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.mvc-card-head > * {
  margin: 0px;
}
.mvc-card-title {
  font-weight: 800;
}
.mvc-card-text {
  color: var(--gray-400-color);
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 16px;
}
</style>
