<template>
  <div style="display: block; margin-top: 30px">
    <button
      style="background-color: blue; color: white; padding: 7px"
      @click="openCart()"
    >
      View Cart
    </button>
    <div v-for="product in products" :key="product.id">
      <div
        style="
          width: 350px;
          height: 400px;
          margin-right: auto;
          margin-left: auto;
          border: 1px solid blue;
          margin-bottom: 20px;
          padding: 5px;
        "
      >
        <img
          style="height: 300px"
          :src="require(`~/assets/images/${product.img}`)"
        />

        <span style="text-align: center">{{ product.name }}</span>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          "
        >
          <span>&#8358; {{ product.amount }}</span>
          <button
            @click="addToCart(product)"
            style="color: white; background-color: blue; padding: 4px"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="openProductForm"
      persistent
      transition="dialog-top-transition"
    >
      <div style="background-color: white; padding: 10px">
        <div>
          <input
            style="border: 1px solid; padding: 3px"
            v-model="couponCode"
            placeholder="Enter Coupon Code"
          />
          <button
            style="background-color: blue; color: white; padding: 3px"
            @click="applyCoupon"
          >
            Apply Coupon
          </button>
        </div>

        <h2>Shopping Cart</h2>
        <div v-for="item in cart" :key="item.product.id">
          <div
            style="
              display: flex;
              width: 300px;
              justify-content: space-between;
              margin-bottom: 10px;
            "
          >
            <span>{{ item.product.name }}</span>
            <span>{{ item.quantity }}</span>
            <button
              style="background-color: blue; padding: 4px; color: white"
              @click="increaseQuantity(item)"
            >
              +
            </button>
            <button
              style="background-color: red; padding: 4px; color: white"
              @click="decreaseQuantity(item)"
            >
              -
            </button>
            <button
              style="background-color: red; padding: 4px"
              @click="removeFromCart(item)"
            >
              Remove
            </button>
          </div>
        </div>
        <p>Total Amount: {{ getTotalAmount() }}</p>
      </div>

      <div style="background-color: white; width: 100%">
        <button
          style="
            background-color: red;
            color: white;
            padding: 6px;
            max-width: 200px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          "
          @click="closeCart()"
        >
          Close Cart
        </button>
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
        { id: 1, name: "Web3Cart Whisky", amount: 6000, img: "Wine.jpg" },
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
          img: "Washing-Machine.jpg",
        },
        { id: 1, name: "Web3Cart Phone", amount: 6000, img: "Phone.jpg" },
        {
          id: 1,
          name: "Web3Cart Solar Generator",
          amount: 6000,
          img: "Solar-Generator.jpg",
        },
      ],
      cart: [],
    };
  },
  methods: {
    openCart() {
      this.openProductForm = true;
    },

    closeCart() {
      this.openProductForm = false;
    },

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
        this.saveCart();
        this.$toast.success("Congrats. Coupon Code Applied.");
      } else {
        this.$toast.error("Coupon Code Doesn't Exist.");
      }
    },
  },
  mounted() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  },
};
</script>
