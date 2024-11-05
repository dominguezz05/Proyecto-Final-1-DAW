<?php
session_start();
?>
<html>
    <head>
        <title>AUTENTICACIÓN</title>
        <link  rel="website icon" type="png" href="images/abajo.png">
        <script>
        function mostrarAlerta(mensaje, urlDestino) {
            alert(mensaje);
            window.location.href = urlDestino;
        }//crear funcion para la alerta y redigirte a la pagina
    </script>
    </head>
    <body>
        <?php
        if ($_SESSION['numeroaleatorio'] == $_REQUEST['numero']) {
            echo '<script>mostrarAlerta("Capchat realizado,  no eres un robot", "bienvenido.php");</script>';
            //para que te muestre la alerta y te rediriga a la pagina
            
        } else {
            
            echo '<script>mostrarAlerta("Verificación fallida. Inténtalo de nuevo.", "index.php");</script>';
           
        }
        ?>
    </body>
</html> 