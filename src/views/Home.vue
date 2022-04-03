<template>
  <main>
    <div class="container">
      <div class="row">
        <div
          class="
            col-xl-6
            d-flex
            flex-column
            align-items-center
            justify-content-between
          "
        >
          <p>Card 1</p>
          <div class="d-flex justify-content-center align-items-center">
            <router-link to="/card1">
              <img class="image img-fluid" src="../assets/card_large.png" />
            </router-link>
          </div>
        </div>

        <div
          class="mt-4 mt-xl-0 col-xl-6 d-flex flex-column align-items-center"
        >
          <p>Card 2</p>
          <div class="d-flex">
            <router-link to="/card2">
              <img class="image img-fluid" src="../assets/card_small.png" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.image {
  height: 500px;
  min-height: 300px;
}
</style>