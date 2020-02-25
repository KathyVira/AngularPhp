<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'mydb');

if (!function_exists('connect')) {
    function connect()
    {
        if (!$link = @mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME)) {

            die('Eror connecting to mysql server!');
        }
        mysqli_set_charset($link, "utf8");
        return $link;
    }
}
$con = connect();
