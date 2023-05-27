<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
	export let product: Product 
	let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
	// id: "1"
	let cartItemIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartItemIndex];
	let price = product.price;
	let totalPrice: number = cartProduct ? cartProduct.quantity * product.price : 0;
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];
		totalPrice = cartProduct ? cartProduct.quantity * product.price : 0;
	});
</script>

<div >
	{#if cartProduct !== undefined}
		<header ><h2>{product.title}</h2></header>
		<div >
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
		<div >
			Price: ${product.price}
		</div>
		<div >
			Total Price: ${totalPrice}
		  </div>
		 
					
		<footer>
			<button  on:click={() => addToCart(product.id,totalPrice,price)}
				>Add</button
			>
			<button  on:click={() => removeFromCart(product.id)}
				>Remove</button
			>
			<button  on:click={() => DeleteCart(product.id)}
				>Delete</button
			>
		</footer>
	{/if}
</div>
<style >
	
</style>