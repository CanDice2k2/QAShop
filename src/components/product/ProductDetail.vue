<template>
    <HeaderComponent></HeaderComponent>
    <div class="bg-white">
        <div class="mx-auto mt-20 max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <!-- Product Image -->
            <div class="lg:max-w-lg lg:self-end">
                <div class="overflow-hidden rounded-lg">
                    <img :src="product.imageSrc" :alt="product.name" class="h-full w-full object-cover object-center" />
                </div>
            </div>

            <!-- Product Info -->
            <div class="mt-10 lg:col-start-2 lg:mt-0 lg:pl-8">
                <div class="flex justify-between">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>
                    <button @click="addToWishlist" class="text-gray-400 hover:text-red-500">
                        <HeartIcon class="h-6 w-6" />
                    </button>
                </div>

                <!-- Price -->
                <div class="mt-4">
                    <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>
                </div>

                <!-- Description -->
                <div class="mt-4">
                    <p class="text-base text-gray-500">{{ product.description }}</p>
                </div>

                <!-- Size Selector -->
                <div class="mt-8">
                    <h3 class="text-sm font-medium text-gray-900">Size</h3>
                    <div class="mt-4 grid grid-cols-4 gap-4">
                        <button v-for="size in product.sizes" :key="size" :class="[
                            selectedSize === size ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900 ring-1 ring-gray-200',
                            'rounded-md py-3 px-3 text-sm font-medium hover:bg-gray-50'
                        ]" @click="selectedSize = size">
                            {{ size }}
                        </button>
                    </div>
                </div>

                <!-- Add to Cart -->
                <div class="mt-8">
                    <button @click="addToCart"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <!-- Reviews Section -->
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold mb-8">Customer Reviews</h2>

            <!-- Review Stats -->
            <div class="flex items-center mb-8">
                <div class="flex items-center">
                    <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400" />
                    <span class="ml-2 text-sm text-gray-600">4.8 out of 5</span>
                </div>
                <span class="mx-4 text-gray-300">|</span>
                <span class="text-sm text-gray-600">128 reviews</span>
            </div>

            <!-- Review List -->
            <div class="space-y-8">
                <div v-for="review in reviews" :key="review.id" class="border-b border-gray-200 pb-8">
                    <div class="flex items-center mb-4">
                        <span class="font-medium">{{ review.author }}</span>
                        <div class="ml-4 flex items-center">
                            <StarIcon v-for="i in review.rating" :key="i" class="h-4 w-4 text-yellow-400" />
                        </div>
                    </div>
                    <p class="text-gray-600">{{ review.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from '../HeaderComponent.vue';
import { StarIcon, HeartIcon } from '@heroicons/vue/24/solid'


const route = useRoute();
const productId = route.params.id
const selectedSize = ref('')

const product = ref({
    name: 'Basic Tee',
    price: '35.00',
    description: 'The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it\'s own look.',
    imageSrc: 'https://bizweb.dktcdn.net/100/415/697/products/mc3-fb5749ff-d267-4a6e-8c6b-db2901aacf22.jpg?v=1637916273907',
    sizes: ['S', 'M', 'L', 'XL'],
})

const reviews = [
    {
        id: 1,
        author: 'John Doe',
        rating: 5,
        content: 'Great product! The quality is amazing and it fits perfectly.',
    },
    {
        id: 2,
        author: 'Jane Smith',
        rating: 4,
        content: 'Nice material and good fit. Would buy again.',
    },
]

const fetchProduct = async () => {
    try {
        const response = await fetch(`http://localhost:8000/api/products/${productId}`)
        if (!response.ok) throw new Error('Failed to fetch product')
        const data = await response.json()
        product.value = data
    } catch (error) {
        console.error('Error fetching product:', error)
    }
}

onMounted(async () => {
  fetchProduct();
})

const addToCart = () => {
    if (!selectedSize.value) {
        alert('Please select a size')
        return
    }
    // Add to cart logic here
}

const addToWishlist = () => {
    // Add to wishlist logic here
}
</script>