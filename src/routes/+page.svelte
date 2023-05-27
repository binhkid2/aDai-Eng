<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	const products: Product[] = data.products;
	import Banner from '../components/Banner/Banner.svelte';
	import Carousel from '../components/Carousel/Carousel.svelte';
	import Collection from '../components/Collections/Collection.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Hero from '../components/Hero/Hero.svelte';
	import Social from '../components/Social/Social.svelte';
</script>
<div><Hero /></div>
<div><Carousel /></div>
<div><Collection /></div>
<div><Banner /></div>
<div><Social /></div>
<style>
</style>
