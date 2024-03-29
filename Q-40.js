// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
var Album = /** @class */ (function () {
    function Album(artist, title, num_tracks) {
        this.artist = artist;
        this.title = title;
        this.num_tracks = num_tracks;
    }
    return Album;
}());
function make_album(artist, title, num_tracks) {
    return new Album(artist, title, num_tracks);
}
console.log(make_album("artist:01", "Album 01"));
console.log(make_album("artist:02", "Album 02"));
console.log(make_album("artist:03", "Album 03", 12));
