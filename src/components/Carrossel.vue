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
      <div class="carrossel-item"></div>
      <div class="carrossel-item selected"></div>
      <div class="carrossel-item"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carrossel",
  data() {
    return {
      images: ["carrossel-image1", "carrossel-image2", "carrossel-image3"],
      currentIndex: 0,
    };
  },
  methods: {
    next(event) {
      for (let i = 0; i < this.images.length - 1; i++) {
        // console.log(this.images[i]);
        // let aux = this.images[i];
        // if (this.currentIndex == i) {
        //   this.images[i] = this.images[i + 1];
        //   this.images[i + 1] = aux;
        // }
      }

      console.log(this.currentIndex);
      this.currentIndex += 1;
      if (this.currentIndex > this.images.length - 1) {
        this.currentIndex = 0;
      }
    },
    prev(event) {
      for (let i = 0; i < this.images.length - 1; i++) {
        // console.log(this.images[i]);
      }
      console.log(this.currentIndex);
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    },
    getImgUrl(url) {
      let images = require.context("../assets/", false, /\.svg$/);
      return images("./" + url + ".svg");
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
}
.carrossel-images :nth-child(1) {
  left: 0px;
}

.carrossel-images :nth-child(2) {
  transform: translateX(-50%);
  left: 50%;
  z-index: 2;
}
.carrossel-images :nth-child(3) {
  right: 0px;
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