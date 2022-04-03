<template>
  <footer class="d-flex align-items-end justify-content-center">
    <p class="footer-title">Desenvolvido por João Paulo</p>
    <div class="social">
      <ul>
        <li>
          <a target="_blank" href="https://github.com/joao5142">
            <img src="../assets/github-brands.svg" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/joao_paulo.png/">
            <img src="../assets/instagram-brands.svg" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jo%C3%A3o-paulo-ferreira-neto-467880182/"
          >
            <img src="../assets/linkedin-brands.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  text-align: center;
}

ul {
  display: flex;
  gap: 20px;
}

li,
li a {
  width: 24px;
  height: 24px;
}

a {
  color: var(--dark);
}
@media (max-width: 400px) {
  footer {
    padding: 0px 10px;
  }
  .footer-title {
    font-size: 0.9rem;
  }
}
</style>