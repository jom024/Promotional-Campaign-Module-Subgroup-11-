<template>
    <div class="cart-container">
      <h1>Cart</h1>
      <a href="/" class="continue-shopping">Continue Shopping</a>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id" :data-id="item.id">
            <td>
              <img :src="item.image" alt="Product Image" class="product-image" />
              <div class="product-details">
                <p>{{ item.name }}</p>
                <p>{{ item.details }}</p>
                <button class="remove-btn" @click="removeItem(item.id)">Remove</button>
              </div>
            </td>
            <td>
              <div class="quantity-control">
                <button class="quantity-btn decrease" @click="decreaseQuantity(item.id)">-</button>
                <span class="quantity">{{ item.quantity }}</span>
                <button class="quantity-btn increase" @click="increaseQuantity(item.id)">+</button>
              </div>
            </td>
            <td class="total-price" :data-unit-price="item.unitPrice">₱{{ subtotal }}</td>
          </tr>
        </tbody>
      </table>
      <div class="cart-summary">
        <p>Subtotal: <span id="subtotal">₱{{ subtotal }}</span></p>
        <p>Discount: <span id="discount">₱{{ discount }}</span></p>
        <p>Total: <span id="total">₱{{ total }}</span></p>
        <input type="text" v-model="discountCode" placeholder="Enter discount code" />
        <button @click="applyDiscount">Apply Discount</button>
        <br /><br />
        <button class="checkout-btn">Check out</button>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        cartItems: [
          {
            id: 1,
            image: '/images/ges.jpg',
            name: 'Floral Relaxed Fit All-Over Printed T-Shirt',
            details: 'Light Peach / Small',
            quantity: 1,
            unitPrice: 499.00,
            totalPrice: 499.00,
          },
        ],
        discountCode: '',
        discount: 0,
        validDiscountCodes: {},
      };
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
      },
      total() {
        return this.subtotal - this.discount;
      },
    },
    methods: {
      removeItem(id) {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
        this.updateSubtotal();
      },
      decreaseQuantity(id) {
        const item = this.cartItems.find(item => item.id === id);
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice = item.unitPrice * item.quantity;
        }
        this.updateSubtotal();
      },
      increaseQuantity(id) {
        const item = this.cartItems.find(item => item.id === id);
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
        this.updateSubtotal();
      },
      applyDiscount() {
        const code = this.discountCode.trim().toUpperCase();
        if (this.validDiscountCodes.hasOwnProperty(code)) {
          const discountValue = this.validDiscountCodes[code];
          this.discount = this.subtotal * discountValue;
        } else {
          alert('Invalid discount code');
        }
        this.updateSubtotal();
      },
      updateSubtotal() {
        this.cartItems.forEach(item => {
          item.totalPrice = item.unitPrice * item.quantity;
        });
      },
      checkout() {
        // Add checkout logic here
      },
    },
    mounted() {
       fetch('http://localhost:8000/promotions')
      .then(response => response.json())
      .then(data => {
        data.forEach(promo => {
          this.validDiscountCodes[promo.promoCode] = promo.percDisc;
        });
      })
      .catch(error => {
        console.error('Error fetching promotions:', error);
      });
  
      this.updateSubtotal();
    },
  };
  </script>
  
  <style scoped>
  .product-image {
    width: 100px;
    height: auto;
  }
  </style>
  