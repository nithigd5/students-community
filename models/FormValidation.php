<?php
require_once($_SERVER["DOCUMENT_ROOT"]."/models/StudentsDetails.php");


class FormValidation{
  public $student;
  function __construct($student)
  {
    $this->student = $student;
  }
  function validateName($name){
    if (!preg_match ("/[a-zA-z]/", $name) ) {  
      $ErrMsg = "Only alphabets and whitespace are allowed.";  
               echo $ErrMsg; 
      return false;
    } 
    return true;  
    
  }
  function validateNumber($num){
    if (!preg_match ("[0-9]*", $num) ){  
      $ErrMsg = "Only numeric value is allowed.";  
      echo $ErrMsg;  
      return false;
    } 
    return true;  
      
  }
  // Validates Email using RegEx
  function validateEmail(){
  
    // if (!preg_match ('[a-zA-A]+[0-9]*@[a-zA-Z0-9]+[.][a-zA-Z]+', $this->student->email) ){  
    //     return false;
    // } 
    return true;
  }
  
  // Validates Name
  function validateStuName(){
    return $this->validateName($this->student->name);
  }
  // Validates Mobile using RegEx
  function validatePhone(){
    return $this->validateNumber($this->student->phone);
  }
  // Validate Date of Birth
  function validateDob(){
  //   "You must be 18+ years of age to use this service.";
  }
  //Validate CollegeName
  function validateCollegeName(){
       return $this->validateName($this->student->college);
  }
  //Validate Degree
  function validateDegree(){
      return $this->validateName($this->student->degree);   
  }
  //Validate Department
  function validateDepartment(){
      return $this->validateName($this->student->department);  
  }
  function validateCity(){
    return $this->validateName($this->student->city);  
  }
  function validateYear(){
    return $this->validateNumber($this->student->year);  
  }
  function validateGraduateYear(){
    return $this->validateNumber($this->student->graduate_year);  
  }

  function validateAll(){
    return ($this->validateStuName() && $this->validateEmail() && $this->validateDob()
            && $this->validateCollegeName() && $this->validatePhone() && $this->validateDegree() 
            && $this->validateYear() && $this->validateDepartment() && $this->validateGraduateYear() 
            && $this->validateCity());
  }
}


?>
