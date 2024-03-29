// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.

let guests : string [] = ["Fawad", "Noreen", "Umar ", "Sahil"];
console.log("Good news! I found a bigger dinner table!");

//Add more Guests
guests.unshift("Bilal khan");
guests.splice(guests.length / 2, 0, "Furqan");
guests.push("Dorani");

guests.forEach(guest => {
    console.log(`Dear ${guest},would you like to join me for dinner?`);
});