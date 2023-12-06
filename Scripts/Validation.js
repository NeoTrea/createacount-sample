function validateForm() {
    var harware = document.getElementById("TechHardware");
    var software = document.getElementById("TechSoftware");
    var web = document.getElementById("web");
    var company = document.getElementById("Company")
    var all = document.getElementById("all");
    var check_email = document.forms["validate"]["emailSet"];
    var dropdownSet = document.getElementById("FDrop");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[?:\.[a-zA-Z0-9-]+]*$/;
    var validNames = /^[A-Z]+[a-z]+$/;
    if (!check_email.value.match(validRegex) || dropdownSet.innerHTML == "Filter" || dropdownSet.innerHTML == "Filter ") {
        if (!check_email.value.match(validRegex)) {
            changeInputFieldColour(check_email, true);
            alert("Error please Fill Email Box with Valid Email")
        } else {
            changeInputFieldColour(check_email, false);
        }
        if (dropdownSet.innerHTML == "Filter" || dropdownSet.innerHTML == "Filter ") {
            alert("Error please Select Filter")
            dropdownSet.style.color = "red";
        } else {
            dropdownSet.style.color = "green";
        }
    } else {
        changeInputFieldColour(check_email, false);
        alert("You have successfully signed up")
        if((Company.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active")){
            location.replace("./1AllFilter.html")
        }
        else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
            location.replace("./2Tech&WebFilter.html")
        }
        else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./3Tech&CompanyFilter.html")
        }
        else if((TechHardware.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./4HardwareWeb&CompanyFilter.html")
        } else if((TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./5SoftwareWeb&CompanyFilter.html")
        } else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active")){
            location.replace("./6TechFilter.html")
        } else if((TechHardware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
            location.replace("./7Hardware&WebFilter.html")
        } else if((TechHardware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./8Hardware&CompanyFilter.html")
        } else if((TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
            location.replace("./9Software&WebFilter.html")
        } else if((TechSoftware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./10Software&CompanyFilter.html")
        } else if((web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
            location.replace("./11Web&CompanyFilter.html")
        }
        else if(TechHardware.classList == "dropdown-item active"){
            location.replace("./12HardwareFilter.html")
        } else if(TechSoftware.classList == "dropdown-item active"){
            location.replace("./13SoftwareFilter.html")
        } else if(web.classList == "dropdown-item active"){
            location.replace("./14WebFilter.html")
        } else if(Company.classList == "dropdown-item active"){
            location.replace("./15CompanyFilter.html")
        } else{
            dropdownSet.innerHTML = "Filter";
        }
    }
}

function changeInputFieldColour(input_field, not_validated) {

    if (not_validated) {
        input_field.style.color = "red";
        input_field.className = "form-control is-invalid";
    } else {
        input_field.style.color = "green";
        input_field.className = "form-control";
    }
}