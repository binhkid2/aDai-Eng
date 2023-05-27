<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart, DeleteCart } from '../../cart';
  import CartsTest from "../../components/Carts/CartsTest.svelte";
      import { onMount } from "svelte";
    /** @type {import('./$types').PageData} */
    export let data: any;
    const products: Product[] = data.products;
    let cart = get(cartItems);
    let  grossPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    
    let grossQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      let formattedPrice: string = formatPrice(grossPrice);
    cartItems.subscribe((newCartValue) => {
      cart = newCartValue;
        grossPrice = cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    
     grossQuantity = cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      formattedPrice = formatPrice(grossPrice);
    });
    function formatPrice(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  onMount(() => {
    formattedPrice = formatPrice(grossPrice);
  });
  </script>
<div class="grid grid-cols-1">
    <h1 class="text-center my-6 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">Cart : {grossQuantity} Items</h1>
    <p class="text-3xl my-6 m-auto text-center">Subtotal: {formattedPrice}<span> &#8363;</span></p>
    <a href="/checkout2" class="m-auto text-center">
      <button class="btn bg-gradient-to-r from-blue-500 to-blue-900 border-0 rounded-lg m-auto text-center">Checkout</button>
    </a>
  </div>
  <div class="relative p-10 max-w-6xl m-auto">
    <div><h2>Total :</h2></div>
    {#each products as product}
   <CartsTest {product}/>
    {/each}
  </div>
  
  