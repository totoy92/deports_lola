<script>
	import { marked } from 'marked';
	let { data } = $props();
	let miArticulo = $state(data.allArticulos[1].noticia);
</script>

<div class="prose mx-auto my-5 w-max">
    <textarea class="textarea textarea-primary w-full" bind:value={miArticulo}></textarea>
	{@html marked(miArticulo)}
</div>
