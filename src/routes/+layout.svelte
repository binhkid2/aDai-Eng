<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
 const products = data.products
 const  productMens  = data.productMens;
	const  productWommens  = data.productWommens;
	const  productUnisexs = data.productUnisexs;
    import "../app.css";
	import Footer from "../components/Footer/Footer.svelte";
	import NavBar from "../components/Navbar/Navbar.svelte";
	import Seo from '$lib/Seo.svelte';
  </script>
  <NavBar {data}  {productMens} {productUnisexs} {productWommens}/>
  <Seo  title="ANDO - nơi tinh túy nước hoa hội tụ" description="Chào mừng đến với ANDO - nơi tinh túy nước hoa hội tụ!

  ANDO là một thương hiệu nước hoa danh tiếng, tạo dựng từ niềm đam mê và sự sáng tạo không ngừng. Chúng tôi tự hào là địa chỉ tin cậy cho những người yêu thích nước hoa, nơi mang đến cho bạn những trải nghiệm thú vị và tinh tế trong thế giới nước hoa." type="WebPage"/>
  <slot />
  <Footer/>