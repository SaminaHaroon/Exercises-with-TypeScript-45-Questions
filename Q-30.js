//Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var Users = ["eric", "hadi", "haroon", "hadia", "admin"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var User = Users_1[_i];
    if (User === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Helo ".concat(User, ", thank you for logging in again"));
    }
}
