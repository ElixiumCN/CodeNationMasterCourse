// Activity 1:JS
// Create an array that lists your favourite films, up to
// 5 elements. [x]
// Add 2 more using a method. [x]
// Use a loop to cycle through the array [x]

let favGames = [
    "Persona 3",
    "Persona 4",
    "Persona 5",
    "Final Fantasy 7",
    "Final Fantasy 10"
];

favGames.push("Street Fighter Alpha 3");
favGames.push("King of Fighters");

for (let i = 0; i < favGames.length; i++){
    console.log(favGames[i]);
}

