import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      products: [
        { id: 1, name: "Web3Cart Malta", amount: 6e3, img: "malt.jpg" },
        {
          id: 1,
          name: "Web3Cart Power Bank",
          amount: 6e3,
          img: "power-bank.jpg"
        },
        { id: 1, name: "Web3Cart Miliki", amount: 6e3, img: "milk.jpg" },
        { id: 1, name: "Web3Cart PS5", amount: 6e3, img: "PS5.jpg" },
        { id: 1, name: "Web3Cart Fridge", amount: 6e3, img: "fRIDGE.jpg" },
        { id: 1, name: "Web3Cart Whisky", amount: 6e3, img: "WINE.jpg" },
        {
          id: 1,
          name: "Web3Cart Sneakers",
          amount: 6e3,
          img: "Sneakers.jpg"
        },
        {
          id: 1,
          name: "Web3Cart Washing Machine",
          amount: 6e3,
          img: "washing-machine.jpg"
        },
        { id: 1, name: "Web3Cart Phone", amount: 6e3, img: "phone.jpg" },
        {
          id: 1,
          name: "Web3Cart Solar Generator",
          amount: 6e3,
          img: "solar-generator.jpg"
        }
      ],
      cart: []
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
    }
  },
  mounted() {
    const storedCart = localStorage.getItem("cart");
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
  ssrRenderList($data.products, (product) => {
    _push(`<div><img${ssrRenderAttr("src", `@/assets/images/${product.img}`)}><span>${ssrInterpolate(product.name)}</span><span>${ssrInterpolate(product.amount)}</span><button>Add to Cart</button></div>`);
  });
  _push(`<!--]--><div><h2>Shopping Cart</h2><!--[-->`);
  ssrRenderList($data.cart, (item) => {
    _push(`<div><span>${ssrInterpolate(item.product.name)}</span><span>${ssrInterpolate(item.quantity)}</span><button>+</button><button>-</button><button>Remove</button></div>`);
  });
  _push(`<!--]--><p>Total Amount: ${ssrInterpolate($options.getTotalAmount())}</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-06b063fa.mjs.map
