// Activity 2:JS
// Generate 6 random numbers between 1-50

let randNum = Math.floor(Math.random() * 50); 

for (let i = 0; i < 6; i++) {
    console.log(randNum); 
    randNum = Math.floor(Math.random() * 50); 
}