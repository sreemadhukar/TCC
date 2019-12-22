<?php
require 'test.php';
error_reporting(E_ERROR);
$aa= [];
$sql = "select * from aa";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $aa[$cr]['firstname'] = $row['firstname'];
        $aa[$cr]['lastname'] = $row['lastname'];
        $cr++;
    }

    echo json_encode($aa);
}
else{
    http_response_code(404);
}
?>