<script lang="ts">
	import LazyImg from '$lib/Lazy/lazyImg.svelte';
    import AutoComplete from "simple-svelte-autocomplete"
    let selectedState :String
    import state from '$lib/utils/state.json';
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
	<div>
       
		<div class="form-control">
            <form method="POST"  action="?/post">
                
			<div class=" px-4 mt-10 flex justify-between">
				<p class="px-2 text-2xl">Basic Details</p>
				<a href="/checkout" class="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-full"
					>Back</a
				>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 p-4">
				<label  class="input-group input-group-vertical p-2">
					<span>Name</span>
					<input autocomplete="off"
                    required type="text" placeholder="Matthew Harvey" class="input input-bordered" />
				</label>
				<label class="input-group input-group-vertical p-2">
					<span>Phone Number</span>
					<input autocomplete="off"
                    required type="text" placeholder="0123456789" class="input input-bordered" />
				</label>
			</div>
			<div class="px-4 grid grid-cols-1">
				<p class="px-2 text-2xl">Shipping Address</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 p-4">
				<label class="input-group input-group-vertical p-2">
					<span>Street</span>
					<textarea autocomplete="off"
                    required placeholder="Example Road" class="input input-bordered" />
				</label>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="input-group input-group-vertical p-2">
					<span>Town/City</span>
					<AutoComplete required={true} items="{state}" labelFieldName="name" bind:selectedItem="{selectedState}" />
				</label>
				<label class="input-group input-group-vertical p-2">
					<span>Email (optional)</span>
					<input type="text" placeholder="yourEmail@gmail.com" class="input input-bordered" />
				</label>
				<label class="input-group input-group-vertical p-2">
					<span>Note for Store (optional)</span>
					<textarea  placeholder="London" class="input input-bordered" />
				</label>
				<button class="m-4 p-4 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
					<div>
						<p class="text-base leading-4">Pay $54652</p>
					</div>
				</button>
			</div>
            
        </form>
			
		</div>
	</div>
	<div class="relative p-4 max-w-6xl m-auto ">
		<LazyImg
			src="https://pos.nvncdn.net/4e732c-26/art/artCT/20191218_kvsDyjqmnz4x0hMVSf9amkZF.jpg"
			alt="banner"
			class="h-full w-full object-contain object-center"
		/>
	</div>
</div>
