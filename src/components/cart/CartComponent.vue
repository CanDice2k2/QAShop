<template>
    <HeaderComponent />
    <div class="bg-white " style="margin-top: 130px">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 pb-24">
          <!-- Cart items -->
          <div class="lg:col-span-8">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h2>
            <div class="mt-8">
              <div v-if="cartItems.length === 0" class="text-center py-12">
                <p class="text-gray-500">Your cart is empty</p>
              </div>
              <div v-else class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  <li v-for="item in cartItems" :key="item.id" class="flex py-6">
                    <!-- Product image -->
                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img :src="item.imageSrc" :alt="item.name" class="h-full w-full object-cover object-center" />
                    </div>
  
                    <!-- Product details -->
                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>{{ item.name }}</h3>
                          <p class="ml-4">${{ (item.price * item.quantity).toFixed(2) }}</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">{{ item.color }}</p>
                      </div>
  
                      <!-- Quantity controls and actions -->
                      <div class="flex flex-1 items-end justify-between text-sm">
                        <div class="flex items-center space-x-4">
                          <div class="flex items-center border rounded-md">
                            <button @click="decrementQuantity(item)" 
                              class="px-3 py-1 border-r hover:bg-gray-100">-</button>
                            <span class="px-4 py-1">{{ item.quantity }}</span>
                            <button @click="incrementQuantity(item)"
                              class="px-3 py-1 border-l hover:bg-gray-100">+</button>
                          </div>
                          <button @click="addToWishlist(item)" 
                            class="text-gray-400 hover:text-red-500">
                            <HeartIcon class="h-5 w-5" />
                          </button>
                          <button @click="removeFromCart(item)" 
                            class="font-medium text-red-600 hover:text-red-500">Remove</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Order summary -->
          <div class="lg:col-span-4">
            <div class="rounded-lg bg-gray-50 p-8">
              <h2 class="text-lg font-medium text-gray-900">Order summary</h2>
              <div class="mt-6 space-y-6">
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">Subtotal</p>
                  <p class="text-sm font-medium text-gray-900">${{ subtotal.toFixed(2) }}</p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm text-gray-600">Shipping</p>
                  <p class="text-sm font-medium text-gray-900">$5.00</p>
                </div>
                <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p class="text-base font-medium text-gray-900">Total</p>
                  <p class="text-base font-medium text-gray-900">${{ total.toFixed(2) }}</p>
                </div>
              </div>
  
              <button @click="checkout"
                class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { HeartIcon } from '@heroicons/vue/24/solid'
  import HeaderComponent from '../HeaderComponent.vue'
  
  interface CartItem {
    id: number
    name: string
    price: number
    quantity: number
    imageSrc: string
    color: string
  }
  
  const cartItems = ref<CartItem[]>([
    {
      id: 1,
      name: 'Basic Tee',
      price: 40.00,
      quantity: 1,
      imageSrc: 'https://bizweb.dktcdn.net/100/415/697/products/mc3-fb5749ff-d267-4a6e-8c6b-db2901aacf22.jpg?v=1637916273907',
      color: 'Black'
    },
    {
      id: 2,
      name: 'Basic Tee',
      price: 35.00,
      quantity: 1,
      imageSrc: 'https://bizweb.dktcdn.net/100/415/697/products/mc3-fb5749ff-d267-4a6e-8c6b-db2901aacf22.jpg?v=1637916273907',
      color: 'Black'
    },
    {
      id: 3,
      name: 'Basic Teemo 123',
      price: 35.00,
      quantity: 5,
      imageSrc: 'https://bizweb.dktcdn.net/100/415/697/products/mc3-fb5749ff-d267-4a6e-8c6b-db2901aacf22.jpg?v=1637916273907',
      color: 'Black'
    },
  ])
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })
  
  const total = computed(() => subtotal.value + 5.00)
  
  const incrementQuantity = (item: CartItem) => {
    item.quantity++
  }
  
  const decrementQuantity = (item: CartItem) => {
    if (item.quantity > 1) {
      item.quantity--
    }
  }
  
  const removeFromCart = (item: CartItem) => {
    const index = cartItems.value.indexOf(item)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }
  
  const addToWishlist = (item: CartItem) => {
    // Add to wishlist logic here
  }
  
  const checkout = () => {
    // Checkout logic here
  }
  </script>