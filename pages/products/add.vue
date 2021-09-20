<template>
  <div class="w-8/12 mx-auto py-14">
    <h3 class="font-semibold text-3xl mb-4">Add Product</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          v-model="name"
          class="h-12 outline-none border-2 border-gray-200 w-full rounded-md px-4"
        />
      </div>
      <div class="mb-3">
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          v-model="description"
          class="h-12 outline-none border-2 border-gray-200 w-full rounded-md px-4 hover:ring"
        />
      </div>
      <div class="mb-3">
        <label for="price">Price</label>
        <input
          type="text"
          id="price"
          v-model="price"
          class="h-12 outline-none border-2 border-gray-200 w-full rounded-md px-4"
        />
      </div>
      <div class="mt-4">
        <button
          class="bg-green-500 hover:bg-green-700 px-4 py-2 text-white rounded-lg"
        >
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      price: null
    };
  },
  methods: {
    handleSubmit() {
      const product = {
        name: this.name,
        description: this.description,
        image: "http://dummyimage.com/638x687.png/ff4444/ffffff",
        price: `${this.price}`
      };

      this.$store.dispatch("addProduct", product);
      this.$router.push("/aaa");
    }
  }
};
</script>

<style></style>
