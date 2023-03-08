<?php
echo("salut");
$servername = "localhost";
$username = "root";
$password = "Grillon.2003";
$name = "BDD";
// Create connection
$db = mysqli_connect($servername, $username, $password, $name);
$conn = new mysqli($servername, $username, $password);
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}
echo "Connected successfully";
?>