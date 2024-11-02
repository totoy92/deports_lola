<script>
    // Estado para controlar la visibilidad del menú móvil
    import Laptop from '$lib/imagenes/laptop.png';
    import { slide } from 'svelte/transition';
    let isMenuOpen = $state(false);

    // Función para alternar el menú móvil
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    // Opcional: cerrar el menú al cambiar de ruta
    const closeMenu = () => {
        isMenuOpen = false;
    };
</script>

<nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
            <img src={Laptop} alt="Logo" class="h-8 w-8">
            <!-- Alternativa con texto -->
            <!-- <span class="text-white text-xl font-bold">Logo</span> -->
        </div>

        <!-- Menú principal centrado - visible en desktop -->
        <div class="hidden md:flex flex-1 justify-center space-x-6">
            <a
                href="/"
                onclick={closeMenu}
                class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700"
            >
                Inicio
            </a>
            <a
                href="/novedades"
                onclick={closeMenu}
                class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700"
            >
                Novedades
            </a>
            <a
                href="/inscripciones"
                onclick={closeMenu}
                class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-700"
            >
                Inscripciones
            </a>
        </div>

        <!-- Botón Admin -->
        <div class="flex-shrink-0">
            <button
                class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out"
            >
                Admin
            </button>
        </div>

        <!-- Botón menú móvil -->
        <div class="md:hidden">
            <button
                onclick={toggleMenu}
                class="text-white hover:text-gray-300 px-2"
                aria-label="Toggle menu"
            >
                <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    </div>

    <!-- Menú móvil -->
    {#if isMenuOpen}
        <div
            class="md:hidden mt-2 transition-all duration-300 ease-in-out"
            transition:slide
        >
            <div class="flex flex-col space-y-2">
                <a
                    href="/"
                    onclick={closeMenu}
                    class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                    Inicio
                </a>
                <a
                    href="/novedades"
                    onclick={closeMenu}
                    class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                    Novedades
                </a>
                <a
                    href="/inscripciones"
                    onclick={closeMenu}
                    class="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                    Inscripciones
                </a>
            </div>
        </div>
    {/if}
</nav>
