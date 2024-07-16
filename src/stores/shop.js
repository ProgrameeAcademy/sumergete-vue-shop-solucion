import { defineStore } from 'pinia'
import products from '../assets/products.json'

export const useShopStore = defineStore('shop', {
  state: () => ({
    products: products,
    cart: []
  }),
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.cart.splice(index, 1)
      }
    }
  }
})