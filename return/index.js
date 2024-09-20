console.clear();

function calcTax(amount, tax = 25) {
  return amount * (1 + tax / 100);
}

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

btn.addEventListener("click", () => {
  const inputValue = input.value;

  const taxIncluded = calcTax(inputValue);
  // const taxIncluded = inputValue * (1 + 25/100)

  div.textContent = taxIncluded;
});

/*btn.addEventListener("click", () => {
  const inputValue = input.value
  
  const valueToCubed = cubed(inputValue)
  // const valueToSqaured = inputValue * inputValue * inputValue
  
  const valueToSqaured = squared(inputValue)
  // const valueToSqaured = inputValue * inputValue
  
  div.textContent = valueToSqaured + valueToCubed
})*/
