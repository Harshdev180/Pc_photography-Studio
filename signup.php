<?php
$con=mysqli_connect('localhost','root','','pcdb');

if(isset($_POST['btn1']))
{
$Name=$_POST['txt1'];
$Phone=$_POST['txt2'];
$Email=$_POST['txt3'];
$Password=$_POST['txt4'];


mysqli_query($con,"insert into reg values('$Name','$Phone','$Email','$Password')");
echo'Data Saved';
header("location:home.html");

}

?>