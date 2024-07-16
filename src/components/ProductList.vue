<script setup>
import { useShopStore } from '../stores/shop'

const store = useShopStore()

const addToCart = (product) => {
  store.addToCart(product)
  alert('Producto añadido al carrito')
}
</script>

<template>
  <div class="product-list">
    <div v-for="product in store.products" :key="product.id" class="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">Precio: ${{ product.price }}</p>
      <button @click="addToCart(product)">Añadir al carrito</button>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product:hover {
  transform: translateY(-5px);
}

h3 {
  color: var(--primary-color);
  margin-top: 0;
}

.price {
  font-weight: bold;
  color: var(--secondary-color);
}

button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
</style>