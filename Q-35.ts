// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. /
//you could print a sentence such as Any of these animals would make a great pet!

let animals : string [] = ["Lion","Cat", "Dog"]

animals.forEach(animal =>{
    console.log(`A ${animal}has a tail`)
});

console.log(" All of these are great pets but i like dogs more!");