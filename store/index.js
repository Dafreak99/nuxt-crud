export const state = () => ({
  products: [],
  product: {}
});

export const actions = {
  async fetchProducts({ commit }) {
    const products = await this.$axios.$get("http://localhost:5000/products");
    commit("setProducts", products);
  },
  async fetchProductById({ commit }, id) {
    const products = await this.$axios.$get(
      `http://localhost:5000/products/${id}`
    );
    commit("setProduct", products);
  },
  async addProduct({ commit }, product) {
    try {
      await this.$axios.$post("http://localhost:5000/products", product);
      commit("addProduct", product);
    } catch (error) {
      console.log(error);
    }
  },
  async removeProduct({ commit }, id) {
    try {
      await this.$axios.$delete(`http://localhost:5000/products/${id}`);
      commit("removeProduct", id);
    } catch (error) {
      console.log(error);
    }
  }
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setProduct(state, payload) {
    state.product = payload;
  },
  addProduct(state, payload) {
    state.products.push(payload);
  },
  removeProduct(state, payload) {
    state.products = state.products.filter(product => product.id === +payload);
  }
};

export const getters = {
  getProductById: state => payload => {
    return state.products.filter(product => product.id === +payload);
  }
};
