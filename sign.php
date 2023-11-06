<?php
include "db_config.php";

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST["titulo"];
    $autor = $_POST["autor"];
    $imagen = $_FILES["imagen"]["name"];
    $imagen_tmp = $_FILES["imagen"]["tmp_name"];

    // Mueve la imagen a una ubicación permanente
    move_uploaded_file($imagen_tmp, "uploads/$imagen");

    // Inserta los datos en la base de datos
    $query = "INSERT INTO reseñas (titulo, autor, imagen) VALUES ('$titulo', '$autor', '$imagen')";
    $result = mysqli_query($con, $query);

    if ($result) {
        $response["success"] = true;
        $response["message"] = "Reseña de libro subida con éxito.";
    } else {
        $response["success"] = false;
        $response["message"] = "Error al subir la reseña del libro: " . mysqli_error($con);
    }
} else {
    $response["success"] = false;
    $response["message"] = "Método de solicitud no válido.";
}

header("Content-type: application/json");
echo json_encode($response);
?>
