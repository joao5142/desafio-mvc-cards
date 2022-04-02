<template>
  <div class="mvc-card-social">
    <div class="icon" v-bind:class="imageColor">
      <img @error="setAltImg" v-bind:src="getImgUrl()" alt="" />
    </div>
    <div>
      <h6 class="mvc-card-title" v-bind:class="textColor">@Revisa Enem</h6>
      <a class="mvc-card-social-link" href="">Clique aqui</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: {
    textColor: String,
    image: String,
    imageColor: String,
  },
  methods: {
    //Method to get url of an image passed by props
    getImgUrl() {
      let images = require.context("../assets/", false, /\.svg$/);
      return images("./" + this.image + ".svg");
    },
  },
  mounted() {
    console.log(this.textColor);
    console.log(this.image);
  },
};
</script>

<style scoped>
.mvc-card-social {
  display: flex;
  align-items: center;

  gap: 10px;
  margin-bottom: 30px;
}
.icon {
  border-radius: 50%;
  width: 61px;
  height: 61px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mvc-card-social-link {
  color: var(--gray-color);
  font-size: 0.7rem;
  font-weight: 300;
}

.icon.purple {
  background: linear-gradient(218.59deg, #7d6af6 30.28%, #4e75ea 84.79%);
}
.icon.red {
  background: linear-gradient(218.59deg, #f66a6a 30.28%, #d9240b 84.79%);
}
.icon.blue {
  background: linear-gradient(180deg, #303a7d 0%, #1a267a 100%);
}

.mvc-card-title.blue {
  color: var(--blue-200-color);
}
.mvc-card-title.blue-dark {
  color: var(--blue-dark-color);
}
.mvc-card-title.red {
  color: var(--red-color);
}
</style>