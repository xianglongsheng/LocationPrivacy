<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page!</h1>

<?php
$servername = "localhost";
$username = "root";
$password = "Besafe";

// 创建连接
$conn = new mysqli($servername, $username, $password);

// 检测连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?> 

</body>
</html>
