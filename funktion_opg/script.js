// "use strict";
// const firstname = "frode";

// function sayHallo(firstname) {
//   console.log(`Hello${firstname}`);
// }
// sayHallo("katinka");

function greeting(firstname) {
  return `hello ${firstname}`;
}

const result = greeting("anny name");
const text = `Greeting ${greeting("anny name")}`;
console.log(text);
