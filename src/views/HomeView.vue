<script setup>
    import {ref} from 'vue'
    import modalForm from "../components/ModalForm.vue";

    const isModalOpened = ref(false);

    const openModal = () => {
    isModalOpened.value = true;
    };
    const closeModal = () => {
    isModalOpened.value = false;
    };

</script>

<template>
<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white p-5">

<div>
    <h1 class="text-3xl text-center m-3 text-gray-900 dark:text-gray-300 font-bold">All Products</h1>
    <hr class="border-gray-400 mb-5">
    <!-- <x-input wire:model.live="search" type="text" class="my-5 min-w-full"  placeholder="Search Product" />  -->
    <button v-on:click="openModal" class="mb-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create New Product</button>

    <modalForm :isOpen="isModalOpened"/>

<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<!-- all card -->
<template v-for="product in products" :key="product.id">
    <div class="sm:col-span-1 min-w-full min-h-96 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
        <div class="w-1/3">
            <img class="object-cover w-full rounded-lg" :src="`${url}${product.image_01}`" >
        </div>
        <div class=w-2/3>
           
            <div class="ml-4">
                <input type="hidden" name="id_product" class=""  :placeholder="product.id" disabled/>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="productName" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.productName" disabled/> 
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="shortDescription" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600" :placeholder="product.shortDescription" disabled/>
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="company" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.company" disabled/>
                </div>
                <div class="grid md:grid-cols-3 md:gap-6">
                    <div class="relative z-0 w-full mb-2 group">
                        <input type="text" name="stock" class="block py-2.5 px-0 w-full text-sm text-center placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600" :placeholder="product.stock" disabled/>
                    </div>
                    <div class="relative z-0 w-full mb-2 group">
                        <input type="text" name="price" class="block py-2.5 px-0 w-full text-sm text-center placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600" :placeholder="`€ ${product.price}`" disabled/>
                    </div>
                    <div class="relative z-0 w-full mb-2 group">
                        <input type="text" name="priority" class="block py-2.5 px-0 w-full text-sm text-center placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.priority" disabled/>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="brand" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.brand" disabled/>
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="address" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.address" disabled/>
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="website" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.website" disabled/>
                </div>
                <div class="relative z-0 w-full mb-2 group">
                    <input type="text" name="email" class="block py-2.5 px-0 w-full text-sm placeholder-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:placeholder-gray-300 dark:border-gray-600"  :placeholder="product.email" disabled/>
                </div>
            </div>
           
        </div>
    </div>  

</template> 
<!-- END all card -->

</div>
<!-- <div class="mx-16 mt-5 px-16">  {{-- px-6 py-4 flex items-center --}}
    <div class="w-48 flex items-center">
        <span class='mb-2 text-sm font-medium text-gray-900 dark:text-white'>View</span>
        <select wire:model.live="cant" class='mx-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
        </select>
        <span class='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Products</span>
    </div>

    {{ $products->links() }}
</div> -->
</div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        products:[],
        url: 'http://localhost/',
        newProduct: {
           productName: "",
           shortDescription: "",
           company: "",
           brand: "",
           price: "",
           stock: 0,
           address: "",
           website: "",
           email: "",
           remember: 0,
           priority: 0,
           image_01: "",
           image_02: "",
           image_03: "",
           image_04: "",
           image_05: ""
        }
      }
    },
    created(){
      this.homeProducts()
    },
    methods:{
      async homeProducts(){
        await this.axios.get('http://localhost/api/home')
                        .then(response => {
                          this.products = response.data
                      }).catch(error=>{console.log(error)})
      },
      async createProduct(){
        await this.axios.post('http://localhost/api/createProduct', this.newProduct)
                        .then(response => {
                            this.newProduct = response.data
                        }).catch(error=>{console.log(error)})
      },
      openModal(){
        this.isOpen = true
      }
    }
  }
</script>