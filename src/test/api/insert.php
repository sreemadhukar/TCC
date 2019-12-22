<?php
$servername = "localhost";
$username = "u551575012_madhu";
$password = "nandu";
$dbname =  "u551575012_tcc";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("connection failed: " . $conn->connect_error);
}
// if(isset($_POST) && !empty($_POST)){
//    $a= $_POST['value'];
// }

$sql = "INSERT INTO test (firstname, lastname)
VALUES ('aaa', 'madhu')";



$conn->close();

?>