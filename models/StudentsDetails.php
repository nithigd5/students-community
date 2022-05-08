<?php
class StudentDetails{
        public $name;
        public $email;
        public $phone;
        public $dob;
        public $college;
        public $degree;
        public $department;
        public $city;
        public $year;
        public $graduation_year;
        public $error;
        function __construct($name,$email,$phone,$dob,$college,$degree,
                             $department,$city,$year,$graduation_year)
        {
            $this->name = $name;
            $this->email = $email;
            $this->phone = $phone;
            $this->dob = $dob;
            $this->college = $college;
            $this->degree = $degree;
            $this->year = $year;
            $this->degree = $department;
            $this->year = $city;
            $this->graduation_year = $graduation_year;
        }
}

?>