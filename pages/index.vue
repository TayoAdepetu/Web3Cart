<template>
  <div style="display: block">
    <div
      v-for="product in products"
      :key="product.id"
      @click="openProductForm == true"
    >
      <div
        style="
          width: 250px;
          height: auto;
          margin-right: auto;
          margin-left: auto;
        "
      >
        <img :src="require(`~/assets/images/${product.img}`)" />

        <span>{{ product.name }}</span
        >\
        <div style="display: flex; justify-content: space-between">
          <span>{{ product.amount }}</span>
          <button @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="openProductForm"
      persistent
      transition="dialog-top-transition"
    >
      <div>
        <!-- Add this code inside the Shopping Cart section -->
        <div>
          <input v-model="couponCode" placeholder="Enter Coupon Code" />
          <button @click="applyCoupon">Apply Coupon</button>
        </div>

        <h2>Shopping Cart</h2>
        <div v-for="item in cart" :key="item.product.id">
          <span>{{ item.product.name }}</span>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item)">+</button>
          <button @click="decreaseQuantity(item)">-</button>
          <button @click="removeFromCart(item)">Remove</button>
        </div>
        <p>Total Amount: {{ getTotalAmount() }}</p>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponCode: "",

      openProductForm: false,
      products: [
        { id: 1, name: "Web3Cart Malta", amount: 6000, img: "malt.jpg" },
        {
          id: 1,
          name: "Web3Cart Power Bank",
          amount: 6000,
          img: "power-bank.jpg",
        },
        { id: 1, name: "Web3Cart Miliki", amount: 6000, img: "milk.jpg" },
        { id: 1, name: "Web3Cart PS5", amount: 6000, img: "PS5.jpg" },
        { id: 1, name: "Web3Cart Fridge", amount: 6000, img: "Fridge.jpg" },
        { id: 1, name: "Web3Cart Whisky", amount: 6000, img: "WINE.jpg" },
        {
          id: 1,
          name: "Web3Cart Sneakers",
          amount: 6000,
          img: "Sneakers.jpg",
        },
        {
          id: 1,
          name: "Web3Cart Washing Machine",
          amount: 6000,
          img: "washing-machine.jpg",
        },
        { id: 1, name: "Web3Cart Phone", amount: 6000, img: "phone.jpg" },
        {
          id: 1,
          name: "Web3Cart Solar Generator",
          amount: 6000,
          img: "solar-generator.jpg",
        },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ product, quantity: 1 });
      }

      this.saveCart();
    },
    increaseQuantity(item) {
      item.quantity += 1;
      this.saveCart();
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.cart = this.cart.filter((i) => i !== item);
      }

      this.saveCart();
    },
    removeFromCart(item) {
      this.cart = this.cart.filter((i) => i !== item);
      this.saveCart();
    },
    getTotalAmount() {
      return this.cart.reduce(
        (total, item) => total + item.product.amount * item.quantity,
        0
      );
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    applyCoupon() {
      if (this.couponCode === "WEB3BRIDGECOHORTx") {
        // Apply a 10% discount
        this.cart.forEach((item) => {
          item.product.amount *= 0.9; // 10% discount
        });
      }

      this.saveCart();
    },
  },
  mounted() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  },
};
</script>
