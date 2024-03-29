//Seeing the World: Think of at least five places in the world you’d like to visit.

let placesTovisit: string [] = ["india", "Pakistan", "Japan", "America", "China"]
//Print your array in its original order.
console.log("oringnal order:", placesTovisit);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [ ...  placesTovisit].sort());

console.log("oringnal order:", placesTovisit);

console.log("Reverse Alphabetical order:", [ ...  placesTovisit].sort().reverse());

console.log("oringnal order:", placesTovisit);

placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);

placesTovisit.reverse();
console.log("Original order:", placesTovisit);

placesTovisit.sort();
console.log("Alphabrtical order:", placesTovisit);

placesTovisit.reverse();
console.log("Reverse alphabrtical order:", placesTovisit);


