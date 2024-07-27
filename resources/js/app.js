import './bootstrap';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Voucher from './components/VoucherPage.vue'; // Adjust the path to your component
import Cart from './components/cart.vue'; // The component to be displayed on the '/cart' route
import router from './router'; // Import the router

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Register your component
Vue.component('voucher-page', require('./components/VoucherPage.vue').default);
Vue.component('cart-page', require('./components/VoucherPage.vue').default);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(Voucher)
  });
// main.js





