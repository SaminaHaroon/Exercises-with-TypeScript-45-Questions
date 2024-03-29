//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_user : string [] = ["Admin", "Eric", "Hadi", "Hadia", "Haroon"]
let new_users : string[] = ["Admin", "Haroon", "Noshaba", "Hashir", "Farooq"]

let current_user_lower : string [] =current_user.map(user => user.toLowerCase())

for (let new_user of new_users){
    if (current_user_lower.includes(new_user.toLowerCase())){
        console.log(`sorry ${new_user}, that name is taken`)
    }else {
        console.log(`yes ${new_user}, is still in avalibale list`)
    }
}