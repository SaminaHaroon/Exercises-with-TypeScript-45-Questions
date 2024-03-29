//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_user = ["Admin", "Eric", "Hadi", "Hadia", "Haroon"];
var new_users = ["Admin", "Haroon", "Noshaba", "Hashir", "Farooq"];
var current_user_lower = current_user.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_user_lower.includes(new_user.toLowerCase())) {
        console.log("sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still in avalibale list"));
    }
}
