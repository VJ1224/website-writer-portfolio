<?php
    $title = $_POST['title'];
    $body = $_POST['body'];

    $files = count(scandir("../content/")) - 1;
    $link = "../content/link" . $files . ".txt";
    echo $link;
    echo $files;
    $file = fopen(link, "w");
    fwrite($file, $body);
    fclose($file);  
?>
