//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
let city1 = city_country("Karachi", "Pakistan");
let city2 = city_country("Sydney", "Australia");
let city3 = city_country("paris", "France");

console.log(city1);
console.log(city2);
console.log(city3);
