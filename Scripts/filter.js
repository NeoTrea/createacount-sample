var harware = document.getElementById("TechHardware");
var software = document.getElementById("TechSoftware");
var web = document.getElementById("web");
var company = document.getElementById("Company")
var all = document.getElementById("all");
var dropdownSet = document.getElementById("FDrop");

all.addEventListener("click", () => {
    if (all.classList == "dropdown-item") {
        TechHardware.className = "dropdown-item active";
        TechSoftware.className = "dropdown-item active";
        web.className = "dropdown-item active";
        Company.className = "dropdown-item active"
        all.className = "dropdown-item active";
        dropdownSet.innerHTML = "All";
    } else {
        TechHardware.className = "dropdown-item";
        TechSoftware.className = "dropdown-item";
        web.className = "dropdown-item";
        all.className = "dropdown-item";
        Company.className = "dropdown-item"
        dropdownSet.innerHTML = "Filter";
    }
})
harware.addEventListener("click", () => {
    if (TechHardware.classList == "dropdown-item") {
        TechHardware.className = "dropdown-item active";
    } else {
        TechHardware.classList = "dropdown-item";
        dropdownSet.innerHTML = "Filter";
    }
    SetBox();
})
software.addEventListener("click", () => {
    if (TechSoftware.classList == "dropdown-item") {
        TechSoftware.className = "dropdown-item active";
    } else {
        TechSoftware.classList = "dropdown-item";
    }
    SetBox();
})
web.addEventListener("click", () => {
    if (web.classList == "dropdown-item") {
        web.className = "dropdown-item active";
    } else {
        web.classList = "dropdown-item";
    }
    SetBox();
})
company.addEventListener("click", () => {
    if(Company.classList == "dropdown-item"){
        Company.className = "dropdown-item active";
    } else {
        Company.classList = "dropdown-item";
    }
    SetBox();
})

function SetBox() {
    if((Company.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active")){
        all.className = "dropdown-item active";
        dropdownSet.innerHTML = "All";
    }
    else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Tech & Web";
    }
    else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Tech & Company";
    }
    else if((TechHardware.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Hardware, Web & Company";
    } else if((TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Software, Web & Company";
    } else if((TechHardware.classList == "dropdown-item active") && (TechSoftware.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Tech";
    } else if((TechHardware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Hardware & Web";
    } else if((TechHardware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Hardware & Company";
    } else if((TechSoftware.classList == "dropdown-item active") && (web.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Software & Web";
    } else if((TechSoftware.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Software & Company";
    } else if((web.classList == "dropdown-item active") && (Company.classList == "dropdown-item active")){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Web & Company";
    }
    else if(TechHardware.classList == "dropdown-item active"){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Hardware";
    } else if(TechSoftware.classList == "dropdown-item active"){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Software";
    } else if(web.classList == "dropdown-item active"){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Web";
    } else if(Company.classList == "dropdown-item active"){
        all.className = "dropdown-item";
        dropdownSet.innerHTML = "Company";
    } else{
        dropdownSet.innerHTML = "Filter";
    }
}