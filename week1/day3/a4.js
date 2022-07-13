// Displays 4 films stored in an array.
// Use a for loop to show each film in the array. [x]
// Use an if statement to check if the 3rd film in the array is
// Final Fantasy 7.
// If it is, return “Yay it’s Final Fantasy 7. If it isn’t return “Boo!
// we want Final Fantasy 7!

// Activity 4
let gameList = [
    "Persona 3",
    "Persona 4",
    "Persona 5",
    "Final Fantasy 7",
    "Final Fantasy 10"
]

for (let i = 0; i < gameList.length; i++) {
    console.log(gameList[i]); 
}

if (gameList[2] == "Final Fantasy 7") {
    console.log("Yay it's Final Fantasy 7!"); 
} else {
    console.log("Boo! We want Final Fantasy 7!");
}