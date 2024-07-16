<script setup>
import ShoppingCart from '../components/ShoppingCart.vue'
</script>

<template>
  <div class="cart-container">
    <h2>Tu Carrito de Compras</h2>
    <ShoppingCart />
  </div>
</template>

<style scoped>
.cart-container {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: var(--primary-color);
  margin-top: 0;
}
</style>