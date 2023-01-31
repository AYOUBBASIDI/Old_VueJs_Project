<?php
class db{
    public function __construct(){
       $con = mysqli_connect('localhost','root','','atdev',);
    if($con) echo "conected"; 
    }
    
}
    


?>