//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one 
//False result for each of the following:

// Equality with strings
console.log("Testing equality with strings:");
console.log("Bags" == "Bags"); // True
console.log("bag" == "Bag"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Book".toLowerCase() == "book"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(12 > 6); // True
console.log(3 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True