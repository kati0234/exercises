// let moms = 0.25;
// let price = 130;

// function momsregner(price, moms) {
//   let value = price * moms + price;
//   console.log(value);
// }
// momsregner(price, moms);

function momscalc(price, moms = 25) {
  let value = price * (moms / 100 + 1);
  console.log(value);
}
momscalc(1000);
momscalc(100, 70);
