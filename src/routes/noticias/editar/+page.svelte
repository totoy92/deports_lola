<script>

	let { data } = $props();
</script>

<h1>Page</h1>

<div class="prose">
	<ul>
		{#each data.posts as post (post.id)}
			<li>
				<a href={`/noticias/editar/art/${post.id}`} data-sveltekit-reload>{post.titulo}</a>
			</li>
		{/each}
	</ul>
</div>
