<?php

class userDetails{
    
}

if($_SERVER['REQUEST_METHOD']=="POST"){
    $name = test_input($_POST['name']);
    echo $name;
}else{
    http_response_code(403);
    exit(0);
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>