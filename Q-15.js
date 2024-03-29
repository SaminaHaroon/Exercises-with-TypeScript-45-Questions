"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//so you need to send out a new set of invitations. You’ll have to think of someone
//else to invite.
let guests = ["Fawad", "Noreen", "Umar ", "Hadia"];
let canNotAteend = "Hadia";
console.log(`${canNotAteend} can not attend the dinner.`);
//Replace the Guest
let newGuest = "Sahil";
guests[guests.indexOf(canNotAteend)] = newGuest;
//new invitstion
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner.`);
});
