// Let’s edit our person object to include...
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}”
// example 1
const person = {
    name: 'Wall Street Senpai',
    age: 36,
    favGames: [
        'Persona 4',
        'Persona 5',
        'Final Fantasy 10'
    ],
    sayHi () {
        return `Hello, my name is ${this.name}. I am ${this.age} years old.`
    }
};

console.log(person.favSongs);
console.log(person.sayHi());


