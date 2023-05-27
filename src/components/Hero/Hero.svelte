<script lang="ts">
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment';
let carousel; // for calling methods of the carousel instance

    </script>

{#if browser}
<Carousel
  autoplay
  autoplayDuration={4000}
  autoplayProgressVisible
  arrows={false}
  
>
<!-- Hero1 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1683249047877-17fa602ff4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/products">All Products</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero2 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1495085461086-ae0ad0a8fd74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/products">Mens Procducts</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero3 -->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1596713907713-e2595427fd3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/products">Wommens Procducts</a>
            
        </div>
        <div />
    </div>
</div>
<!-- Hero 4-->
<div class="hero bg-fixed bg-center bg-cover" style='background-image: url("https://images.unsplash.com/photo-1580215045854-a9ef1eac4e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"); min-height: 100vh'>
    <div class="hero-content grid grid-cols-1 md:grid-cols-2 lg:flex-row-reverse">
        <div class="p-10 ml-2 rounded-3xl bg-opacity-100 relative">
            <h1 class="mb-5 text-5xl font-bold">Welcome to <em class="font-extrabold text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-red-300 to-red-700">ANDO</em></h1>
            <p class="mb-5 text-3xl">Selling the best shoes by the biggest brands since 2013.</p>
            <a class="btn bg-gradient-to-r from-red-300 to-red-700 border-0 rounded-lg hover:scale-110" href="/products">Unisex Procducts</a>
            
        </div>
        <div />
    </div>
</div>
</Carousel>
{/if}
