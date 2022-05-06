function validateForm(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    if(name.value == ""){
        var error = name.nextElementSibling;
        error.innerText = "Please Enter your name.";
        return false;
    }else{
        error.innerText = "";
    }

    if(email.value == ""){
        var error = email.nextElementSibling;
        error.innerText = "Please Enter your email.";
        return false;
    }else{
        error.innerText = "";
    }

    return true ;
}