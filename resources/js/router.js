// router/index.js

import Vue from 'vue';
import Router from 'vue-router';
// import Voucher from './components/VoucherPage.vue'; // Adjust the path to your component
import Cart from './components/cart.vue'; // The component to be displayed on the '/cart' route

Vue.use(Router);

export default new Router({
  mode: 'history', // Optional: if you want clean URLs without the #
  routes: [
    // { path: '/', component: Voucher },
    { path: '/cart', name: 'cart', component: Cart } // Define the route and name
  ]
});
