<script setup>
import { useShopStore } from '../stores/shop'

const store = useShopStore()

const removeFromCart = (productId) => {
  store.removeFromCart(productId)
}
</script>

<template>
  <div class="shopping-cart">
    <div v-if="store.cart.length === 0" class="empty-cart">
      <p>Tu carrito está vacío.</p>
    </div>
    <div v-else>
      <div v-for="item in store.cart" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Cantidad: {{ item.quantity }}</p>
        <p class="price">Precio: ${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button @click="removeFromCart(item.id)">Eliminar</button>
      </div>
      
      <div class="cart-total">
        <h3>Total: ${{ store.cartTotal.toFixed(2) }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.empty-cart {
  text-align: center;
  color: var(--secondary-color);
}

.cart-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item h3 {
  color: var(--primary-color);
  margin-top: 0;
}

.price {
  font-weight: bold;
  color: var(--secondary-color);
}

button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c0392b;
}

.cart-total {
  margin-top: 20px;
  text-align: right;
  font-size: 1.2em;
  color: var(--secondary-color);
}
</style>