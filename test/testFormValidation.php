<?php
require($_SERVER["DOCUMENT_ROOT"]."/models/StudentsDetails.php");
require($_SERVER["DOCUMENT_ROOT"]."/models/FormValidation.php");
$student  = new StudentDetails(
    "Vasanth",
    "vasanth@vastn.com",
    9552222233,
    "23/04/2002",
    "nsit",
    "B.E",
    "cse",
    "salem",
    "3",
    "2023"

);
$formValidation = new FormValidation($student);
if( $formValidation->validateAll()){
    echo "all are validated";
}
else{
    echo "not valid";
}

?>