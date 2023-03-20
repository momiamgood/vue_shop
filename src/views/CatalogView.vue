<template>
  <div>
    <app-nav></app-nav>
    <h1>Каталог</h1>
    <div class="catalog-cont">
      <div class="catalog-itm" v-for="product in products" v-bind:key="product.id">
        <p>{{ product.img }}</p>
        <div>
          <p>{{ product.title }}</p>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";

export default {
  name: "CatalogView",
  components: {
    AppNav
  },
  data() {
    return {
      products: this.$store.products
    }
  }
}
</script>

<style scoped>
.catalog-cont {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
}

.catalog-itm {
  width: 200px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.catalog-itm > div {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>