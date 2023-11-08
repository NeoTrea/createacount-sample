function validateForm(){
    var check_username = document.forms["validate"]["FirstName"];
    var check_password = document.forms["validate"]["Password"];
    var check_lastname = document.forms["validate"]["LastName"];
    var check_confirmPassword = document.forms["validate"]["Confirm"];
    var check_email = document.forms["validate"]["emailSet"];
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validNames = /^[A-Z]+[a-z]+$/;
    if(check_password.value.length < 8 || !check_username.value.match(validNames) || check_password.value == "" || !check_lastname.value.match(validNames) || check_confirmPassword.value != check_password.value || !check_email.value.match(validRegex)){
        if(!check_username.value.match(validNames)){
            changeInputFieldColour(check_username, true);
        }else{
            changeInputFieldColour(check_username, false);
        }

        if(!check_lastname.value.match(validNames)){
            changeInputFieldColour(check_lastname, true);
        }else{
            changeInputFieldColour(check_lastname, false);
        }
        
        if(check_password.value.length < 8 || check_password.value == ""){
            changeInputFieldColour(check_password, true);
        }else{
            changeInputFieldColour(check_password, false);
        }
        if(check_confirmPassword.value != check_password.value || check_confirmPassword.value.length < 8){
            changeInputFieldColour(check_confirmPassword, true);
        }else{
            changeInputFieldColour(check_confirmPassword, false);
        }
        if(!check_email.value.match(validRegex)){
            changeInputFieldColour(check_email, true);
        }else{
            changeInputFieldColour(check_email, false);
        }
    }else{
        changeInputFieldColour(check_password, false);
        changeInputFieldColour(check_username, false);
        changeInputFieldColour(check_lastname, false);
        changeInputFieldColour(check_confirmPassword, false);
        changeInputFieldColour(check_email, false);
        location.replace("www.neotrea.site/Home")
    }
}

function changeInputFieldColour(input_field, not_validated) {
    
    if(not_validated) {
        input_field.style.color = "red";
        input_field.className="form-control is-invalid";
    }else{
        input_field.style.color = "green";
        input_field.className="form-control";
    }
}
