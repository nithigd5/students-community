<?php  
  require_once($_SERVER["DOCUMENT_ROOT"]."./models/SecurityCheck.php");
  require_once($_SERVER["DOCUMENT_ROOT"]."./models/FormValidation.php");

  function getFormData(){
    $name = test_input($_POST["name"]); 
    $email = test_input($_POST["email"]);
    $phone = test_input($_POST["phone"]);
    $dob   = test_input($_POST["dob"]);
    $college = test_input($_POST["college"]);
    $degree  = test_input($_POST["degree"]);
    $department = test_input($_POST["department"]);
    $city = test_input($_POST["city"]);
    $year = test_input($_POST["year"]);
    $graduation_year = test_input($_POST["graduation_year"]);
    $student = new StudentDetails($name,$email,$phone,$dob,$college,$degree,
    $department,$city,$year,$graduation_year);
    return $student;
  }

  if($_SERVER["REQUEST_METHOD"]=="POST"){
    $student = getFormData();
    $FormValidation = new FormValidation($student);
    if($FormValidation->validateAll()){
      // Store it in Database
    }else{
      http_response_code(403);
    }
  }else{
    http_response_code(403);
  }
  ?>