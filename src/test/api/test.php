<?php 

define('DB_HOST', 'localhost');
define('DB_USER', 'u551575012_madhu');
define('DB_PASS', 'nandu');
define('DB_NAME', 'u551575012_tcc');

function connect()
{
    $connect= mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

    if (mysqli_connect_errno($connect)) {
        die("failed to connect:" . mysqli_connect_error());
    }
    mysqli_set_charset($connect, "utf8");
    return $connect;
}
$con = connect();
?>