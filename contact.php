<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les champs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email de réception (à changer par la tienne)
    $to = "jeffriedh@gmail.com";

    // Sujet de l’email
    $mail_subject = "📩 Nouveau message depuis Steeve.site : $subject";

    // Contenu de l’email
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    // En-têtes (important pour éviter le spam)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l’email
    if (mail($to, $mail_subject, $body, $headers)) {
        echo "<h2 style='color:green;'>✅ Merci $name, votre message a été envoyé avec succès !</h2>";
    } else {
        echo "<h2 style='color:red;'>❌ Oups, une erreur est survenue. Réessayez plus tard.</h2>";
    }
} else {
    echo "Accès interdit 🚫";
}
?>
