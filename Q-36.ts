//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function T_shirt(size: string, message: string) {
  console.log(
    `design a  ${size} t-shirt with the message"${message}" printed on it.`
  );
}
T_shirt("medium", "code is life");
