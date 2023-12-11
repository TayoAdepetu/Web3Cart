<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
      @click="openProductForm == true"
    >
      <img :src="`@/assets/images/${product.img}`" />
      <span>{{ product.name }}</span>
      <span>{{ product.amount }}</span>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>

    <v-dialog
      v-model="openProductForm"
      persistent
      transition="dialog-top-transition"
    >
      <div>
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
          { id: 1, name: "Web3Cart Fridge", amount: 6000, img: "fRIDGE.jpg" },
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
    },
    mounted() {
      const storedCart = localStorage.getItem("cart");
      this.cart = storedCart ? JSON.parse(storedCart) : [];
    },
  };
</script>
