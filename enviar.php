<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica el CAPTCHA
    $captcha = $_POST['g-recaptcha-response'];
    $secretKey = "TU_SECRET_KEY"; // Cambia esto por tu clave secreta de reCAPTCHA

    $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha";
    $response = file_get_contents($url);
    $responseKeys = json_decode($response, true);

    if ($responseKeys["success"]) {
        // Procesa el formulario
        $nombre = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $mensaje = htmlspecialchars($_POST['message']);

        $destinatario = "tucorreo@example.com";
        $asunto = "Nuevo mensaje de contacto desde tu sitio web";

        $cuerpoMensaje = "Nombre: $nombre\n";
        $cuerpoMensaje .= "Email: $email\n";
        $cuerpoMensaje .= "Mensaje:\n$mensaje\n";

        $cabeceras = "From: $nombre <$email>\r\n";
        $cabeceras .= "Reply-To: $email\r\n";
        $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
            echo "¡Mensaje enviado con éxito!";
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Por favor, verifica el CAPTCHA.";
    }
}
?>