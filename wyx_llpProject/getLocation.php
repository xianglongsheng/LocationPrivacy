<?php
//$q=$_GET["q"];

$con = mysql_connect('localhost', 'root', 'Besafe');
if (!$con)
 {
 die('Could not connect: ' . mysql_error());
 }

mysql_select_db("llproject", $con);

$sql="SELECT longitude,latitude,count(*) as count_num FROM location group by longitude,latitude";

$result = mysql_query($sql);

echo "<table border='1'>
<tr>
<th>longitude</th>
<th>latitude</th>
<th>count_num</th>
</tr>";

while($row = mysql_fetch_array($result))
 {
 echo "<tr>";
 echo "<td>" . $row['longitude'] . "</td>";
 echo "<td>" . $row['latitude'] . "</td>";
 echo "<td>" . $row['count_num'] . "</td>";
 echo "</tr>";
 }
echo "</table>";

mysql_close($con);
?>