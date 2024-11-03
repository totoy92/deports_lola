<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/stores';
	import Menu from '$lib/components/Menu.svelte';

	let estado = $state('');

	if (!$page.data.user) {
		estado = 'ingreso';
	} else {
		estado = 'salida';
	}

</script>

<Menu {estado} />

{@render children()}
