<script>
	let { data } = $props();
</script>

<h1>Page</h1>

<div class="prose">
	<ul>
		{#each data.posts as post (post.id)}
		    <li>
                <a href={`/blog/${post.id}`}>{post.tema}</a>
			</li>
		{/each}
	</ul>
</div>
