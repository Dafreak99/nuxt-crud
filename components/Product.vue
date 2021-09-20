<template>
  <nuxt-link
    :to="`/products/${product.id}`"
    class="col-span-3 bg-white rounded-lg shadow-md"
  >
    <img :src="product.image" alt="img" class="image" />
    <div class="px-8 py-8">
      <h3 class="text-3xl font-semibold mb-4">{{ product.name }}</h3>
      <div class="flex flex-col">
        <p class="flex-1">{{ product.description }}</p>
        <p class="font-semibold text-xl text-green-500 ">{{ product.price }}</p>
      </div>
      <button class="font-semibold mt-4" @click.stop="handleDelete(product.id)">
        Delete
      </button>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    handleDelete(id) {
      this.$store.dispatch("removeProduct", id);
    }
  }
};
</script>

<style scoped>
.image {
  min-height: 250px;
  max-height: 250px;
  width: 100%;
  object-fit: cover;
}
</style>
