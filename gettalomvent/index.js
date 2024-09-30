// let currentNumber;
// let overNumber;
// let underNumber;

const random = Math.floor(Math.random() * 101);
const text = document.querySelector(".text");
const bntover = document.querySelector(".over");
const bntunder = document.querySelector(".under");
const bntrigtigt = document.querySelector(".rigtigt");
const bntstart = document.querySelector(".start");
let currentGuess;
let min;
let max;
function lavtal(startMax = 100, startMin = 0) {
  //   let value = Math.floor(Math.random() * 101);
  min = startMin;
  max = startMax;
  currentGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  //   gæt random tal mellem min og max
  text.textContent = `gæt ${currentGuess} `;
  //   hvis man klikker over så opdater min tal (retuner ny verdi) og gæt mellem min og max
  // hvis man klikker under så opdater max og gæt tal mellem min og max
}
// bntstart.addEventListener("click", lavtal);

bntstart.addEventListener("click", () => {
  lavtal();
});
bntover.addEventListener("click", () => {
  min = currentGuess + 1; // Opdaterer minimum grænsen
  currentGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  text.textContent = `Gæt: ${currentGuess}`;
});

bntunder.addEventListener("click", () => {
  max = currentGuess - 1; // Opdaterer maksimum grænsen
  currentGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  text.textContent = `Gæt: ${currentGuess}`;
});

bntrigtigt.addEventListener("click", () => {
  text.textContent = `Rigtigt! Det er ${currentGuess}.`;
});

// function startgame() {
//   currentNumber = random;
//   text.textContent = currentNumber;
// }

// function momscalc(price, moms = 25) {
//   let value = price * (moms / 100 + 1);
//   console.log(value);
// }
// momscalc(1000);
// momscalc(100, 70);

// function over() {
//   overNumber =
//     Math.floor(Math.random() * (101 - currentNumber)) + currentNumber + 1;
//   text.textContent = `det her tal ${overNumber} `;
//   currentNumber = overNumber;
// }

// function under() {
//   underNumber = Math.floor(Math.random() * currentNumber);
//   text.textContent = `det her tal ${underNumber} `;
//   currentNumber = underNumber;
// }
// bntunder.addEventListener("click", under);
// bntover.addEventListener("click", over);
