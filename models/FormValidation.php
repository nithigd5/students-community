<?php
require_once("./model/StudentsDetails.php");


class FormValidation{
  public $student;
  function __construct($student)
  {
    $this->student = $student;
  }
  // Validates Name
  function validateName(){

  }
  // Validates Email using RegEx
  function validateEmail(){

  }
  function validatePhone(){

  }
  function validateCollegeName(){
    return $this->validateName();
  }
  function validateAll(){
    return $this->validateName() && $this->validateEmail();
  }
}

?>
