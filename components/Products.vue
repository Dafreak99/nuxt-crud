<template>
  <div class=" py-14">
    <h3 class="text-center text-3xl font-semibold py-10">Products</h3>
    <Spinner v-if="isLoading" />
    <div class="w-8/12 mx-auto grid grid-cols-12 gap-8">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.isLoading = false;
    });
  }
};
</script>

<style></style>
