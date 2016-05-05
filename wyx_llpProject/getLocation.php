<?php
echo "start<br>";
$servername = "localhost";
$username = "root";
$password = "Besafe";

// 创建连接
$conn = new mysqli($servername, $username, $password);

// 检测连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";
echo "here1<br>";
$sql = "use llproject";
if ($conn->query($sql) === TRUE) {
    echo "Database selected successfully<br>";
} else {
    echo "Error selecting database: " . $conn->error . "<br>";
}
$sql = "SELECT longitude,latitude,count(*) as count_num FROM location group by longitude,latitude";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // 输出每行数据
	echo "<table border='1'>
	<tr>
	<th>longitude</th>
	<th>latitude</th>
	<th>count_num</th>
	</tr>";
	while($row = $result->fetch_assoc())
	 {
	 echo "<tr>";
	 echo "<td>" . $row['longitude'] . "</td>";
	 echo "<td>" . $row['latitude'] . "</td>";
	 echo "<td>" . $row['count_num'] . "</td>";
	 echo "</tr>";
	 }
	echo "</table>";
} else {
    echo "<br>0 results";
}
$conn->close();
?>
