<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $subject = strip_tags(trim($_POST["subject"]));
    $brand = strip_tags(trim($_POST["brand"]));
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo "Proszę wypełnić wszystkie pola formularza.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Podano nieprawidłowy adres email.";
        exit;
    }

    $recipient = "orzeldetailing@gmail.com";
    $email_subject = "Nowa wiadomość z formularza: $subject";
    $email_content = "Imię: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Nr tel: $phone\n";
    $email_content .= "Marka i model auta: $brand\n\n";
    $email_content .= "Treść:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        header("Location: contact.html");
        echo "Dziękujemy! Wiadomość została wysłana.";
    } else {
        http_response_code(500);
        echo "Ups! Coś poszło nie tak. Spróbuj ponownie później.";
    }
} else {
    http_response_code(403);
    echo "Wystąpił problem z wysłaniem formularza.";
}
?>
