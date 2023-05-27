<script lang="ts">
	import LazyImg from "$lib/Lazy/lazyImg.svelte";
 /** @type {import('./$types').PageData} */
 export let data :any;
 import ProductsBanner2 from "../../components/ProductsBanner/ProductsBanner2.svelte";
 const  products  = data.products;
</script>
<div>
        <div class="2xl:container 2xl:mx-auto">
            <div class="py-3 lg:px-5 px-4">
                <div class="relative ">
                    <LazyImg alt="ando"
                    class="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"  />
                    <LazyImg alt="ando"
                    class="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"  />
            
                    <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                        <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">All Product</p>
                    </div>
                </div>
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
{#each products as product}
<ProductsBanner2 {product} />
{/each}
</div>
</div>
</div>
</div>
<style lang="postcss">
    
</style>