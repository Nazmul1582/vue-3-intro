const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(payloadId) {
      this.cart.push(payloadId)
    }
  },
});
