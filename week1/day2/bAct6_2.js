let time = "6:00 am";
let placeOfWork = "Office";
let townOfHome = "Liverpool";

if (time == "6:00 am" && townOfHome == "Liverpool"){
    console.log("Still at home");
} else if (time == "7:00 am"){
    ("I'm commuting");
} else if (time == "8:00 am" && placeOfWork == "Office"){
    console.log("I'm at work");
} else {
    console.log("");
}