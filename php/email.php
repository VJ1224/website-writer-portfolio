<?php
    $emailto = "vanshjain1224@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $body = $_POST['body'];
    
    $header = "From:" . $email . "\r\n";
    
    $message = "A new message was sent to you from your website.\n\n";

    $message .= "Name: ";
    $message .= $name;
    $message .= "\n";

    $message .= "Email: ";
    $message .= $email;
    $message .= "\n\n";

    $message .= "Message: ";
    $message .= "\n";
    $message .= $body;

    mail($emailto, $subject, $message, $header);
?>
