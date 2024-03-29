//Greetings: Start with the array you used in Exercise 11, but instead of just printing
//each person’s name, print a message to them. The text of each message should be the
//same, but each message should be personalized with the person’s name.

let Names: string[] = ["Saba", "Hareem", "Ronaq"];
for (let name of Names) {
  console.log(`Hello ${name}, would you like to learn some typeScript today?`);
}
