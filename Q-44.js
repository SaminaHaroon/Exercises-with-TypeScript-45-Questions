"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function Sandwiches(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`Making a sandwich ${items[i]}`);
    }
}
console.log("enjoy your sendwich");
Sandwiches("capsicum", "Seafood", "Egg");
Sandwiches("Roast Beef", "Grilled Cheese");
Sandwiches("Nutella", "Grilled Chicken");
