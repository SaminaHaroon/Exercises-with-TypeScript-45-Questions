//Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// time for the dinner and you have space for only two guests.

let guests : string [] = ["Fawad", "Noreen", "Umar ", "Sahil"];

console.log("Unfortunatuly! I can only invite 2 people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`very sorry ${removedGuest}, I can not invite you to dinner.`);
}


guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

guests.pop();
guests.pop();

guests.splice(0, guests.length);
console.log(guests);