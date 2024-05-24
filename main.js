const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: true,
    };
  },
  methods: {
    updateEmit() {
      this.cart += 1;
    },
  },
});
