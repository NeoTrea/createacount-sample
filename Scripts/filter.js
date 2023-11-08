var tech = document.getElementById("tech");
var ai = document.getElementById("ai");
var gaming = document.getElementById("GAMING");
var dropdownSet = document.getElementById("FDrop");
tech.addEventListener("click", ()=>{
    tech.className = "dropdown-item active";
    ai.className = "dropdown-item";
    gaming.className = "dropdown-item";
    dropdownSet.value = "TECH";
})
ai.addEventListener("click", ()=>{
    ai.className = "dropdown-item active";
    tech.className = "dropdown-item";
    gaming.className = "dropdown-item";
    dropdownSet.value = "AI";
})
gaming.addEventListener("click", ()=>{
    gaming.className = "dropdown-item active";
    ai.className = "dropdown-item";
    tech.className = "dropdown-item";
    dropdownSet.value = "GAMING";
})