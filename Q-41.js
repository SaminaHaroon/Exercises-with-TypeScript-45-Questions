"use strict";
//Question no 41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
show_magicians(magician);
