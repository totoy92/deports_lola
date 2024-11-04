<script lang="ts">
	import type { User } from '$lib/server/database/schema.js';
	import DOMPurify from 'dompurify';

	import { marked } from 'marked';

	let { data }: { data: { user: User; articulo?: { id: number; noticia: string } } } = $props();

	let miArticulo = $state(data.articulo?.noticia || '');

	let miHtml = $derived( marked(miArticulo));

	let sanitizeContent = $state('');

	$effect(() => {
		(async () => {
			sanitizeContent = DOMPurify.sanitize(await miHtml);
		})();
	});
</script>

<div class="mx-auto my-5 flex w-max flex-col">
	<form action="?/update" method="post" class="prose w-max bg-red-600">
		<textarea
			class="textarea textarea-primary textarea-lg w-max"
			bind:value={miArticulo}
			name="noticia"
		></textarea>
		<input type="hidden" name="id" value={data.articulo?.id} />
		<button type="submit" class="btn btn-primary btn-outline my-3">Modificar</button>
	</form>
</div>

<div class="prose">
	{@html sanitizeContent}
</div>
