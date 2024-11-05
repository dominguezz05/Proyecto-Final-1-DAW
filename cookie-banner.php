<?php
// Verifica si la solicitud es una petición de tipo POST para aceptar las cookies
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    setcookie('cookie_banner_accepted', '1', time() + (86400 * 30 * 12), "/"); // Expira en 1 año

    header("Location: " . $_SERVER['PHP_SELF']);
}
?>


<div class="cookie-banner">
    <p>Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestro uso de cookies. Consulte nuestra <a href="URL_POLITICA_PRIVACIDAD" target="_blank" rel="noopener noreferrer">Política de Privacidad</a> para obtener más información.</p>
    <!-- Crea un formulario que envía una solicitud de aceptación de cookies al servidor cuando se presiona el botón Aceptar -->
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
       
        <button type="submit" name="accept_cookies">Aceptar</button>
    </form>
</div> 