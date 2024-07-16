<script setup>
import ProductList from '../components/ProductList.vue'
</script>

<template>
  <div class="shop-container">
    <h2>Nuestros Productos</h2>
    <ProductList />
  </div>
</template>

<style scoped>
.shop-container {
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