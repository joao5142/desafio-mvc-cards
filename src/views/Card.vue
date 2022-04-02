<template>
  <div class="d-flex justify-content-center mb-5 p-4">
    <div class="mvc-card-container">
      <div class="mvc-card">
        <div class="mvc-card-head">
          <div class="icon enem">
            <img src="../assets/logo-enem.svg" alt="" />
          </div>
          <div>
            <h6 class="mvc-card-title">Revisa Enem</h6>
            <a class="mvc-card-social-link" href="">@revisaenemoficial</a>
          </div>
          <button class="btn-follow">Seguir</button>

          <button class="icon close">
            <img src="../assets/icon-close.svg" alt="" />
          </button>
        </div>

        <div class="mvc-card-text">
          Fique ligado nas dicas , conteúdos e novidades sobre a plataforma!
          Siga nossas contas no Instagram!
        </div>
        <Carrossel />
      </div>
    </div>
  </div>
</template>

<script>
import Carrossel from "../components/Carrossel.vue";
export default {
  name: "Card",

  components: {
    Carrossel,
  },
};
</script>

<style scoped>
.mvc-card-container {
  max-width: 720px;
  min-width: 300px;
  border: 25px solid transparent;
  border-radius: 30px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4e75ea, #7f6af7);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.mvc-card {
  padding: 30px 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.mvc-card-head {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.mvc-card-title {
  font-weight: 700;
}
.mvc-card-social-link {
  color: var(--purple-color);
  font-size: 1rem;
}
.mvc-card-text {
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 20px;
}

.icon.close {
  align-items: center;

  padding: 5px;
  width: 40px;
  height: 40px;

  background-color: var(--red-dark-color);
  position: absolute;
  top: -15px;
  right: -25px;
}
.icon.enem {
  width: 71px;
  height: 71px;
  background: linear-gradient(218.59deg, #7d6af6 30.28%, #4e75ea 84.79%);
}
.icon.enem img {
  width: 40px;
  height: 40px;
}

/* BUTTONS */
.btn-follow {
  background-color: var(--blue-light-400-color);
  padding: 9px 40px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 0.7rem;
}

@media (max-width: 585px) {
  .mvc-card {
    padding: 20px;
  }
  .mvc-card-title,
  .mvc-card-social-link,
  .mvc-card-text {
    font-size: 0.8rem;
  }

  .mvc-card-head > :not(.icon) {
    flex: 2;
  }

  .icon.enem {
    width: 40px;
    height: 40px;
    padding: 10px;
  }
  .icon.enem img {
    width: 30px;
    height: 30px;
  }
  .icon.close {
    width: 30px;
    height: 30px;
    top: -10px;
    right: 0px;
  }
  .btn-follow {
    min-width: 200px;
  }
}
@media (min-width: 540px) and (max-width: 585px) {
  .btn-follow {
    min-width: 300px;
  }
}
@media (min-width: 585px) and (max-width: 633px) {
  .icon.close {
    top: -20px;
    right: -40px;
  }
}
</style>