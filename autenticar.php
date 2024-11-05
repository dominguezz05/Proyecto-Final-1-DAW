<?php
session_start();

$usuario = "root";
$password = "";
$servidor = "localhost";
$basededatos = "trabajo_final";

$conexion = mysqli_connect($servidor, $usuario, $password) or die("Error de conexión");
$db = mysqli_select_db($conexion, $basededatos) or die("Error al conectar");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE nombre = '$nombre'";
    $resultado = mysqli_query($conexion, $sql);

    if ($resultado && mysqli_num_rows($resultado) > 0) {
        $row = mysqli_fetch_assoc($resultado);
        $hashed_password = $row['password'];

        if (password_verify($password, $hashed_password)) {
            $_SESSION['nombre'] = $nombre;
            header("Location: index.php");
            exit();
        } else {
            echo "Contraseña incorrecta. <a href='iniciosesion.html'>volver</a>";
        }
    } else {
        echo"Nombre usuario no encontrado. <a href='iniciosesion.html'>volver</a>";
    }
}
?>