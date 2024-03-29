"use strict";
//Question no 43
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    const greatmagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + " the great");
    }
    return greatmagicians;
}
const magicians3 = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
const greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);
