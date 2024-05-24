app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: false,
    },
  },
  template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!-- <img v-bind:src="image" alt=""> -->
            <img :class="!inStock ? 'out-of-stock-img' : ''" :src="image" alt="" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div
              @mouseover="updateVariant(index)"
              v-for="(variant, index) in variants"
              class="color-circle"
              :style="{backgroundColor: variant.color}"
            >
            </div>
            <button :disabled="!inStock" class="button" :class="{disabledButton : !inStock}" v-on:click="addToCart">Add To Cart</button>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview" />
      </div>
    `,
  data() {
    return {
      product: "Socks",
      brand: "Learning",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyster"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return "$2.99";
    },
  },
});
