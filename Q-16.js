// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
var guests = ["Fawad", "Noreen", "Umar ", "Sahil"];
console.log("Good news! I found a bigger dinner table!");
//Add more Guests
guests.unshift("Bilal khan");
guests.splice(guests.length / 2, 0, "Furqan");
guests.push("Dorani");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",would you like to join me for dinner?"));
});
