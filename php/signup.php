<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $connection = mysqli_connect("localhost", "id6962555_vanshjain", "vanshjain", "id6962555_newsletter");

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    mysqli_query($connection, "INSERT INTO subscribers 
    VALUES ('$name', '$email')");

    mysqli_close($connection);
?>
