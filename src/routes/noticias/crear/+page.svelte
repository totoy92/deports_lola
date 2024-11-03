<script>
   import { marked } from 'marked'
   let valor = $state('')
</script>
<form action="?/grabar" method="post" class="flex flex-col mx-auto my-10 w-6/12">
    <label for="title">
        Titulo del artículo
        <input
            type="text"
            name="titulos"
            class="input input-info input-md w-full my-2"
            placeholder="Titulo"
            required>
    </label>
    <textarea
        name="texto"
        bind:value={valor}
        class="textarea textarea-info h-8/12"
        placeholder="Escribe tu articulo"
        required>
    </textarea>
    <button type="submit" class="btn btn-primary btn-sm mt-1 ">Grabar</button>
</form>

<div class="prose flex flex-col mx-auto w-6/12">
    {@html marked(valor)}
</div>
