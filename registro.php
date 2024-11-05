 <?php

$usuario = "root";
$password = "";
$servidor = "localhost";
$basededatos = "trabajo_final";

$conexion = mysqli_connect($servidor, $usuario, $password) or die("Error de conexión");
$db = mysqli_select_db($conexion, $basededatos) or die("Error al conectar");

if ($_SERVER ['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $consulta = "SELECT * FROM usuarios WHERE nombre =' $nombre'";
    $resultado = mysqli_query($conexion, $consulta);

    if ($resultado && mysqli_num_rows($resultado) > 0) {
        echo "El nombre de usuario ya existe. <a href='registro.html'>VOLVER</a> ";
    } else {
        $sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$password')";
        $ejecutar = mysqli_query($conexion, $sql);

        if (!$ejecutar) {
            echo'<script type="text/javascript">
        alert("Ups, hubo algún error, intentelo de nuevo. ");
        window.location.href="registro.html";
        </script>';
        } else {
           
            echo'<script type="text/javascript">
        alert("Usuario registrado correctamente.");
        window.location.href="iniciosesion.html";
        </script>';
        }
    }
}
?> 
<?php
require_once __DIR__ . '/vendor/autoload.php';

$client = new MongoDB\Client('mongodb://127.0.0.1:27017');

$database = $client->selectDatabase('trabajo_final');
$collection = $database->usuarios;

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$password = $_POST['password'];


$documento = [
    'nombre' => $_POST['nombre'],
    'email' => $_POST['email'],
    'password' => $_POST['password'],
];

$resultado = $collection->insertOne($documento);

if ($resultado->getInsertedCount() > 0) {
    echo 'Los datos se han insertado correctamente en MongoDb <a href="iniciosesion.html">Iniciar sesion</a>';
} else {
    echo'Error al insertar los datos <a href="registro.html">VOLVER</a>';
}
?>

