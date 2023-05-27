<script lang="ts">
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data: any;
	const products: Product[] = data.productByCollection;
	import Page404 from '$lib/utils/Page404.svelte';
    import TestProducts from '../../../components/ProductsBanner/TestProducts.svelte';
	const params = $page.params.id.toUpperCase();
</script>
{#if products.length !== 0}
<div class="mx-auto container px-6 xl:px-0 py-12">
    <div class="flex flex-col"> 
        <div class="flex flex-col justify-center">
            <div class="relative">
                <img class="hidden sm:block object-cover w-full h-52" src="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sofa" />
                <img class="sm:hidden object-cover w-full h-52" src="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sofa" />
                <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                    <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">{params}</p>
                </div>
            </div>
        </div>
        <div class="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
		{#each products as product}
			<TestProducts {product}/>
		{/each}
	</div>
    </div>
    </div>
{:else}
	<Page404 />
{/if}
