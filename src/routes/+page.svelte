<script>
   import fondo from '$lib/imagenes/fon.jpg'
</script>

<!-- Contenedor principal que contiene el fondo y el texto -->
<div class="fondo">
    <h1>Bienvenido</h1>
</div>

<style>
    /* Configuración para el fondo y centrado */
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    .fondo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-image: url('$lib/imagenes/fon.jpg'); /* Usa la ruta completa si está en `static/imagen` */
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1; /* Envía el fondo detrás del contenido */
    }

    h1 {
        color: white;
        font-size: 5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        margin: 0;
    }
</style>
