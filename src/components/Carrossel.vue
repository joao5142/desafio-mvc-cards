<template>
  <div class="mvc-card-carrossel">
    <div class="carrossel-content">
      <div v-on:click="prev" class="arrow-left icon">
        <img src="../assets/arrow-left.svg" alt="" />
      </div>

      <div class="carrossel-images">
        <img v-for="i of images" v-bind:key="i" v-bind:src="getImgUrl(i)" />
      </div>

      <div v-on:click="next" class="arrow-right icon">
        <img src="../assets/arrow-right.svg" alt="" />
      </div>
    </div>
    <div class="carrossel-bottom">
      <div
        v-for="(item, index) in images"
        class="carrossel-item"
        v-bind:class="{ selected: index == currentIndex }"
        v-bind:key="index"
      ></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carrossel",
  data() {
    return {
      images: ["carrossel-image1", "carrossel-image2", "carrossel-image3"],
      currentIndex: 1,
    };
  },
  methods: {
    next(event) {
      //currentIndex para saber qual imagem esta no centro do slide
      let arrLength = this.images.length - 1;
      this.currentIndex += 1;

      if (this.currentIndex > arrLength) {
        this.currentIndex = 0;
      }

      this.createNewArrayImages("next", arrLength);
    },
    prev(event) {
      //currentIndex para saber qual imagem esta no centro do slide
      let arrLength = this.images.length - 1;
      this.currentIndex -= 1;

      if (this.currentIndex < 0) {
        this.currentIndex = arrLength;
      }
      this.createNewArrayImages("prev", arrLength);
    },
    createNewArrayImages(funcName, arrLength) {
      let arrAux = [];
      for (let i = 0; i <= arrLength; i++) {
        if (i == 0) {
          arrAux[i] =
            funcName == "prev" ? this.images[1] : this.images[arrLength];
        } else if (i == 1) {
          arrAux[i] =
            funcName == "prev" ? this.images[arrLength] : this.images[0];
        } else {
          arrAux[i] = funcName == "prev" ? this.images[0] : this.images[1];
        }
      }
      this.images = arrAux; //setando um novo array de imagens para o state images
    },
    getImgUrl(url) {
      let image = require.context("../assets/", false, /\.svg$/);
      return image("./" + url + ".svg");
    },
  },
};
</script>
<style>
/* CARROSSEL */
.carrossel-images {
  display: flex;
  max-width: 600px;
  height: 250px;
  position: relative;
}
.carrossel-images > * {
  flex: 1 1;
  position: absolute;
  max-width: 260px;
  max-height: 245px;
  animation: slider 0.1s linear;
  border-radius: 15px;
  object-fit: cover;
}

@keyframes slider {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(0px);
  }
}

.carrossel-images :nth-child(1) {
  left: 0px;
  transition-delay: 50ms;
}

.carrossel-images :nth-child(2) {
  transform: translateX(-50%);
  left: 50%;
  z-index: 2;
  min-width: 250px;
  transition-delay: 10ms;
  box-shadow: -4px 1px 15px rgba(0, 0, 0, 0.6);
  object-position: center;
}

.carrossel-images :nth-child(3) {
  right: 0px;
  transition-delay: 50ms;
}
.mvc-card-carrossel {
  position: relative;
  height: 260px;
}
.arrow-left,
.arrow-right {
  position: absolute;
  color: white;
  background-color: var(--purple-color);
  transform: translateY(-80%);
  top: 50%;
  z-index: 3;
  cursor: pointer;
}
.arrow-left {
  left: -20px;
}
.arrow-right {
  right: -20px;
}
.carrossel-bottom {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 5px;
}
.carrossel-item {
  border-radius: 50%;
  background-color: var(--purple-color);
  opacity: 0.2;
  width: 12px;
  height: 12px;
}
.carrossel-item.selected {
  opacity: 1;
}

@media (max-width: 500px) {
  .carrossel-images {
    height: 160px;
  }
  .carrossel-images img {
    height: 150px;
  }
  .mvc-card-carrossel {
    height: 180px;
  }
}
</style>