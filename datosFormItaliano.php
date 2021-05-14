<html>

<head>
	<!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

	<style>
		.fondo{
				
				background-image: url(img/fondo_contacto.png);
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				width:100%;
				height:100vh;

				}
	</style>
</head>

<body class="p-3">

	<section class="fondo rounded shadow">

	</section>


	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
</body>

</html>



<?php

$destinatario = 'ibizadrinksexperience@gmail.com';
$from = 'ibizadrinks@ibizadrinksexperience.com';
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje= $_POST['mensaje'];
$contenido = "Nombre: " . $nombre .  "\nTelefono: " . $telefono ."\nEmail: " . $email . "\nMensaje: " . $mensaje;


$asunto = "Mensaje nuevo";

$headers = "From: ".$from;


if (!empty($nombre) & !empty($telefono) & !empty($email) & !empty($mensaje) ) {
	mail($destinatario, $asunto, $contenido, $headers);
	echo "<script>
			Swal.fire({
				 icon: 'success',
				  title: 'Tu mensaje se ha enviado exitosamente',
				  showConfirmButton: false,
				 timer: 4000
			})
	</script>";
	echo "<script> setTimeout(\"location.href='it/contatto.html'\",2000)</script>";
} else {
	echo "<script>
			Swal.fire({
				 icon: 'error',
				  title: 'Debe completar todos los campos.',
				  showConfirmButton: false,
				 timer: 4000
			})
	</script>";
	echo "<script> setTimeout(\"location.href='it/contatto.html'\",2000)</script>";
}


?>