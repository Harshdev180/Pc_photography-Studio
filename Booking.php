<?php
$con=mysqli_connect('localhost','root','','pcdb');

if(isset($_POST['btn2']))
{

$Full_Name=$_POST['txt1'];
$FunctionName=$_POST['txt2'];
$Phone=$_POST['txt3'];
$Email=$_POST['txt4'];
$Pincode=$_POST['txt5'];
$House_No.=$_POST['txt6'];
$Area=$_POST['txt7'];
$Landmark=$_POST['txt8'];
$City=$_POST['txt9'];
$State=$_POST['txt10'];


mysqli_query($con,"insert into booking values('$Full_Name','$FunctionName',$Phone,'$Email',$Pincode,'$House_No','$Area','$Landmark','$City','$State')");
echo'Data Saved';
header("location:thankyou.html");

}

?>