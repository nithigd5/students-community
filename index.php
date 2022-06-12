<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {

    case '':
    case '/':
        require __DIR__ . '/views/home.php';
        break;

    case '/login':
        require __DIR__ . '/views/login.html';
        break;

    case '/register':
        require __DIR__ . '/views/register.html';
        break;

    case '/post':
        require __DIR__ . '/views/post.php';
        break;

    default:
        http_response_code(404);
        require __DIR__ . '/views/404.html';
        break;
}

?>