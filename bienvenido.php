<!doctype html>
<html>
    <head>
        <title>Bienvenido</title>
        <meta charset="utf-8">
        <link  rel="website icon" type="png" href="images/abajo.png">
        <style>
            body{
               margin-top: 50px;
               margin-left: 50px;
               background: linear-gradient(to right, rgb(0, 255, 191), rgba(1, 243, 102, 0.808));
            }
            echo h1{
                 box-shadow: 0px 0xpx 10px blue;
            }
            .cookie-banner {
            background-color: #f4f4f4;
            color: #333;
            position: fixed;
            bottom: 30px;
            left: 30px;
            right: 30px;
            padding: 20px;
            box-sizing: border-box;
            z-index: 9999;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .cookie-banner p {
            margin: 0;
            font-size: 18px;
            line-height: 1.5;
        }

        .cookie-banner a {
            color: #333;
            text-decoration: underline;
        }

        .cookie-banner button {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .cookie-banner button:hover {
            background-color: #fff;
            color: #333;
        }
        </style>
    </head>
    <body>
        <?php
        session_start();
        if (isset($_SESSION['nombre'])) {
            echo"<h1> Bienvenido " . $_SESSION['nombre'] . " , Has flipado con este proyecto!</h1>";
            echo "<a href='cerrar_sesion.php'> Cerrar sesion </a>";
        } else {
            header("Location: iniciosesion.html");
            exit();
        }
        if (!isset($_COOKIE['cookie_banner_accepted'])) {
            include 'cookie-banner.php';
        }
        ?>
    </body>
</html>
