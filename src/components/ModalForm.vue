<script setup>
import {ref, defineProps, defineEmits} from 'vue'

const props = defineProps({
  isOpen: Boolean,
});

function close() {
    this.isOpen = false
}

</script>

<template>

<div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
        <!-- Body -->
    
        <div id="modalForm" class="m-5 bg-white dark:bg-gray-800 shadow-xl sm:rounded-lg flex motion-safe:hover:scale-[1.01] transition-all duration-250" >
            <div class="w-1/3">  
            
                
              
            </div>
            <div class="w-2/3 mx-4 p-2">
                <div class="justify-center p-5">
                    <form >
                        <div class="mb-6 min-w-full grid sm:grid-cols-4 mb:grid-cols-6 lg:grid-cols-9">
                            <div class="text-white m-3 text-4xl text-center font-bold sm:col-span-3 mb:col-span-5 lg:col-span-8">{{ $title }}</div>
                            <div class="sm:col-span-1 border border-gray-400 rounded-lg p-3">
                                
                            </div>
                        </div>
                        <hr class="border-gray-400 mb-5">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">    
                            
                        </div>
                        <div class="grid gap-6 mb-6 md:grid-cols-3">
                      
                        </div>
                        <div class="mb-6">
                   
                        </div> 
                        <div class="mb-6">
                          
                        </div>
                        <div class="mb-6">
                          
                        </div>     
        

                        <div>
                            <button v-on:click="close" class="mr-10 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Close</button>
                         
                                <button  class="mr-10 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Store Product</button>
                         
                                <button  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete Product</button>
                          
                                <button  class="text-white bcyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Edit Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Body -->
        </div>
    </div>
</div>
  

</template>


