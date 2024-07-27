<template>
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <!-- Menu Icon on the left side -->
          <b-navbar-toggle target="nav-collapse">
            <template #default="{ expanded }">
              <b-icon icon="list" />
            </template>
          </b-navbar-toggle>
  
          <!-- Centered Logo -->
          <b-navbar-brand href="#">
            <h1 style="font-family: 'Lato', sans-serif; font-size: 25px;">G E S T O U R A G E</h1>
          </b-navbar-brand>
  
          <!-- Navbar Links (icons on the right side) -->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <!-- Icon on the right side -->
              <b-nav-item href="#">
                <b-icon icon="cart"></b-icon>
              </b-nav-item>
              <b-nav-item href="#">
                <b-icon icon="bookmark"></b-icon>
              </b-nav-item>
              <b-nav-item href="#">
                <b-icon icon="person"></b-icon>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
  
      <b-container fluid class="p-0">
      <b-row>
        <b-col cols="12">
            <a href="cart">
                <div class="banner-container animate" style="cursor:pointer;" @click="redirectToCart">
            <b-img src="/images/promo1(1).png" fluid alt="Summer Sale"></b-img>
          </div>
            </a>
            <a href="cart">
          <div class="banner-container animate" style="cursor:pointer;" @click="redirectToCart">
            <b-img src="/images/promo2.jpg" fluid alt="New Arrivals"></b-img>
          </div>
          </a>
          <a href="cart">
          <div class="banner-container animate" style="cursor:pointer;" @click="redirectToCart">
            <b-img src="/images/promo3.png" fluid alt="Free Shipping"></b-img>
          </div>
        </a>
        </b-col>
      </b-row>
    </b-container>
  
      <b-container fluid class="footer text-white text-center p-4">
        <p>&copy; 2024 Gestourage. All rights reserved.</p>
      </b-container>
    </div>
  </template>
  
  <script>

export default {
  methods: {
    redirectToCart() {
      this.$router.push({ name: 'cart' });
    },
  },
};
  </script>
  
  <style>
 .footer {
    background-color: #1E1B17;
 }
  </style>
  