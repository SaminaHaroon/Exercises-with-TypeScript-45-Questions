//Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let Users : string [] = ["eric", "hadi", "haroon", "hadia","admin"]
for(let User of Users){
    if (User === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Helo ${User}, thank you for logging in again`)
    }
}
