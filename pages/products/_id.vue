<template>
  <div class="w-8/12 mx-auto py-10">
    <h3 class="text-3xl font-semibold mb-4">{{ product.name }}</h3>
    <p class="mb-6">{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <img :src="product.image" alt="img" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["product"])
  },
  mounted() {
    this.$store.dispatch("fetchProductById", this.$route.params.id);
  }
};
</script>

<style></style>
