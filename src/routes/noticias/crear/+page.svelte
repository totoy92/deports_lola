<script>
   import { marked } from 'marked'
   let valor = $state('')
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-8">
        <!-- Formulario de edición -->
        <form
            action="?/grabar"
            method="post"
            class="bg-white rounded-lg shadow-sm p-6"
        >
            <div class="space-y-6">
                <!-- Campo del título -->
                <div>
                    <label
                        for="title"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Título del artículo
                    </label>
                    <input
                        type="text"
                        name="titulos"
                        id="title"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        placeholder="Escribe el título aquí"
                        required
                    >
                </div>

                <!-- Campo del contenido -->
                <div>
                    <label
                        for="content"
                        class="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Contenido
                    </label>
                    <textarea
                        id="content"
                        name="texto"
                        bind:value={valor}
                        class="w-full h-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y transition duration-150 ease-in-out"
                        placeholder="Escribe tu artículo aquí..."
                        required
                    ></textarea>
                </div>

                <!-- Botón de envío -->
                <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                    Guardar artículo
                </button>
            </div>
        </form>

        <!-- Vista previa -->
        {#if valor}
            <div class="bg-white rounded-lg shadow-sm p-6">
                <h2 class="text-lg font-semibold text-gray-900 mb-4">Vista previa</h2>
                <div class="prose max-w-none">
                    {@html marked(valor)}
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    /* Estilos para el contenido markdown renderizado */
    :global(.prose) {
        @apply text-gray-800;
    }
    :global(.prose h1) {
        @apply text-3xl font-bold mb-4 text-gray-900;
    }
    :global(.prose h2) {
        @apply text-2xl font-bold mb-3 text-gray-900;
    }
    :global(.prose h3) {
        @apply text-xl font-bold mb-2 text-gray-900;
    }
    :global(.prose p) {
        @apply mb-4 leading-relaxed;
    }
    :global(.prose ul) {
        @apply list-disc list-inside mb-4;
    }
    :global(.prose ol) {
        @apply list-decimal list-inside mb-4;
    }
    :global(.prose a) {
        @apply text-indigo-600 hover:text-indigo-800 underline;
    }
    :global(.prose blockquote) {
        @apply border-l-4 border-gray-200 pl-4 italic my-4;
    }
    :global(.prose code) {
        @apply bg-gray-100 rounded px-1 py-0.5 text-sm font-mono;
    }
    :global(.prose pre) {
        @apply bg-gray-100 rounded-lg p-4 overflow-x-auto;
    }
</style>
