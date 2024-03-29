//Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesTovisit = ["india", "Pakistan", "Japan", "America", "China"];
//Print your array in its original order.
console.log("oringnal order:", placesTovisit);
//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], placesTovisit, true).sort());
console.log("oringnal order:", placesTovisit);
console.log("Reverse Alphabetical order:", __spreadArray([], placesTovisit, true).sort().reverse());
console.log("oringnal order:", placesTovisit);
placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);
placesTovisit.reverse();
console.log("Original order:", placesTovisit);
placesTovisit.sort();
console.log("Alphabrtical order:", placesTovisit);
placesTovisit.reverse();
console.log("Reverse alphabrtical order:", placesTovisit);
