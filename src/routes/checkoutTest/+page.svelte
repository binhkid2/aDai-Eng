<script lang="ts">
  import { get } from "svelte/store";
  import cartItems from "../../cart";
  import Carts from "../../components/Carts/Carts.svelte";
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
  
  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
      grossPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  
   grossQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  });
</script>

<div>
  {#each products as product}
    <Carts {product} />
  {/each}
  
  <div class="card-body px-4">
    Gross Quantity: {grossQuantity}
  </div>
  <div class="card-body px-4">
      Gross Quantity simple: {cart.length}
    </div>
  <div class="card-body px-4">
    Gross Price: ${grossPrice} <!--  add [.toFixed(2)] if work with dolar $ -->
  </div>
 
</div>

<style >
/* Add your custom styles here */

</style>
