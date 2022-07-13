// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. [x]
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower.

const senpaiFollowers = ["Jack Posobiec", "Sven Henrich", "Mark Steyn","Neil Oliver"]
const doombergFollowers = ["Jack Posobiec", "Eva Vlaardingerbroek", "Neil Oliver", "Bernie Spofforth"]

let mutualFollowers=[];

for (let i = 0; i <senpaiFollowers.length; i++){
    for (let j = 0; j <doombergFollowers.length; j++){
        if(senpaiFollowers[i] === doombergFollowers[j]){
            mutualFollowers.push(senpaiFollowers[i]);
        }
    }
}
console.log(mutualFollowers);

