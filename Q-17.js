//Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// time for the dinner and you have space for only two guests.
var guests = ["Fawad", "Noreen", "Umar ", "Sahil"];
console.log("Unfortunatuly! I can only invite 2 people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("very sorry ".concat(removedGuest, ", I can not invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.pop();
guests.pop();
guests.splice(0, guests.length);
console.log(guests);
