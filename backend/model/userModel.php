<?php
include_once "../database/db.php";

class userModel{
    protected $db;

    public function __construct(){
        $this->db = new db();
    }

    public function insert($data){
        $conn = $this->db;
        $requet = "INSERT INTO client(fname, lname, tel,profession,psseudo_client) VALUES (?,?,?,?,?)";
        $stmn = $conn->prepare($requet);
        return $stmn->execute([$data[0],$data[1],$data[2],$data[3],uniqid()]);
    }
    
}



?>