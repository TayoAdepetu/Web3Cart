import{_ as g,v as i,L as m,M as d,x as e,y as s,t as o}from"./entry.f1c481fd.js";const h={data(){return{products:[{id:1,name:"Web3Cart Malta",amount:6e3,img:"malt.jpg"},{id:1,name:"Web3Cart Power Bank",amount:6e3,img:"power-bank.jpg"},{id:1,name:"Web3Cart Miliki",amount:6e3,img:"milk.jpg"},{id:1,name:"Web3Cart PS5",amount:6e3,img:"PS5.jpg"},{id:1,name:"Web3Cart Fridge",amount:6e3,img:"fRIDGE.jpg"},{id:1,name:"Web3Cart Whisky",amount:6e3,img:"WINE.jpg"},{id:1,name:"Web3Cart Sneakers",amount:6e3,img:"Sneakers.jpg"},{id:1,name:"Web3Cart Washing Machine",amount:6e3,img:"washing-machine.jpg"},{id:1,name:"Web3Cart Phone",amount:6e3,img:"phone.jpg"},{id:1,name:"Web3Cart Solar Generator",amount:6e3,img:"solar-generator.jpg"}],cart:[]}},methods:{addToCart(t){const n=this.cart.find(c=>c.product.id===t.id);n?n.quantity+=1:this.cart.push({product:t,quantity:1}),this.saveCart()},increaseQuantity(t){t.quantity+=1,this.saveCart()},decreaseQuantity(t){t.quantity>1?t.quantity-=1:this.cart=this.cart.filter(n=>n!==t),this.saveCart()},removeFromCart(t){this.cart=this.cart.filter(n=>n!==t),this.saveCart()},getTotalAmount(){return this.cart.reduce((t,n)=>t+n.product.amount*n.quantity,0)},saveCart(){localStorage.setItem("cart",JSON.stringify(this.cart))}},mounted(){const t=localStorage.getItem("cart");this.cart=t?JSON.parse(t):[]}},C=["src"],p=["onClick"],_=e("h2",null,"Shopping Cart",-1),k=["onClick"],v=["onClick"],y=["onClick"];function b(t,n,c,f,l,r){return o(),i("div",null,[(o(!0),i(m,null,d(l.products,a=>(o(),i("div",{key:a.id},[e("img",{src:`@/assets/images/${a.img}`},null,8,C),e("span",null,s(a.name),1),e("span",null,s(a.amount),1),e("button",{onClick:u=>r.addToCart(a)},"Add to Cart",8,p)]))),128)),e("div",null,[_,(o(!0),i(m,null,d(l.cart,a=>(o(),i("div",{key:a.product.id},[e("span",null,s(a.product.name),1),e("span",null,s(a.quantity),1),e("button",{onClick:u=>r.increaseQuantity(a)},"+",8,k),e("button",{onClick:u=>r.decreaseQuantity(a)},"-",8,v),e("button",{onClick:u=>r.removeFromCart(a)},"Remove",8,y)]))),128)),e("p",null,"Total Amount: "+s(r.getTotalAmount()),1)])])}const S=g(h,[["render",b]]);export{S as default};
