<?php
$con=mysqli_connect('localhost','root','','pcdb');

if(isset($_POST['btn1']))
{
   
$Email=$_POST['txt1'];
$Password=$_POST['txt2'];

mysqli_query($con,"insert into reg values('$Email','$Password')");
echo'Data Saved';
header("location:booking.html");

}

?>