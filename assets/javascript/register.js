function validateEmail(){
    let email = document.getElementById("email");
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var error = email.nextElementSibling;
    if(email.value == "" || email.value.match(regexEmail)==null){
        error.innerText = "Please Enter valid email.";
        email.classList.add("input-error");
        return false;
    }else{
        error.innerText = "";
        email.classList.remove("input-error");
    }
    return true;
}

function validateName(){
    let name = document.getElementById("name");
    var error = name.nextElementSibling;
    if(name.value == "" || name.value.length < 3 || name.value.length > 14 ){
        error.innerText = "Name should be in 3 to 14 characters.";
        name.classList.add("input-error");
        return false;
    }else{
        error.innerText = "";
        name.classList.remove("input-error");
    }
}

function validatePhone(){
    let phone=document.getElementById("phone");
    let regexPhone = /[6-9][0-9]{9}/;
    var error = phone.nextElementSibling;
    if(phone.value.match(regexPhone) == null){
        error.innerText = "Enter a Valid Phone Number."
        phone.classList.add("input-error");
        return false;
    }
    
    error.innerText = "";
    phone.classList.remove("input-error");
    return true;
    
}


function validateForm(){
    let nameErr = validateName();
    let emailErr = validateEmail();
    let phoneErr = validatePhone();
    if(nameErr && emailErr && phoneErr){
     let form = document.getElementById("register");
     form.submit();     
    }
    
}
