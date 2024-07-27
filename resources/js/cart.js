import './bootstrap';

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Cart from './components/cart.vue'; // The component to be displayed on the '/cart' route

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// Register your component
Vue.component('cart-page', require('./components/cart.vue').default);

new Vue({
    el: '#cart',
    render: h => h(Cart)
  });
