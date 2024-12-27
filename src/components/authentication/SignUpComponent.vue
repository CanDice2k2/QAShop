<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <!-- Logo and Title -->
        <div class="text-center">
          <img 
            class="mx-auto h-24 w-auto rounded-full shadow-lg"
            src="https://e7.pngegg.com/pngimages/781/648/png-clipart-coffee-cappuccino-espresso-cafe-cup-of-coffee-cup-of-coffee-beside-spoon-tea-coffee.png"
            alt="Coffee Logo"
          >
          <h1 class="mt-6 text-3xl font-bold text-gray-900">Sign Up</h1>
        </div>
  
        <!-- Sign Up Form -->
        <div class="bg-white py-8 px-6 shadow rounded-lg">
          <div class="space-y-6">
            <div>
              <input 
                type="text" 
                v-model="name" 
                placeholder="Enter Full Name"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                v-model="email" 
                placeholder="Enter Email"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <input 
                type="password" 
                v-model="password" 
                placeholder="Enter Password"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <input 
                type="password" 
                v-model="confirmPassword" 
                placeholder="Confirm Password"
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <button 
                @click="signUp"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
            <div class="text-center">
              <router-link 
                to="/login"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  
  const signUp = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: confirmPassword.value
        })
      })
  
      if (!response.ok) {
        throw new Error('Registration failed')
      }
  
      const data = await response.json()
      router.push('/login')
    } catch (error) {
      console.error('Registration error:', error)
    }
  }
  </script>