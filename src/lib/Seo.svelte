<script lang="ts">
    import { page } from "$app/stores";
  
    export let title : string ;
    export let description : string ;
    export let type :any;
  
    $: url = $page.url.href;
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {@html `<script type="application/ld+json">
  {
      "@context": "http://schema.org",
      "@type": "${type}",
        "name": "${title}",
        "description": "${description}",
        "url": "${url}",
      }
    </script>`}
  </svelte:head>