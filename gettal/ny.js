const random = Math.floor(Math.random() * 101);
const btn = document.querySelector("button");
const text = document.querySelector(".text");

function clickhandler() {
  const inputValue = document.querySelector("input").valueAsNumber;
  if (inputValue > 100) {
    text.textContent = "ik over 100";
    return;
  }
  console.log(inputValue);
  console.log(random);

  if (inputValue > random) {
    text.textContent = "for højt";
    console.log("for højt");
  } else if (inputValue < random) {
    text.textContent = "for lav";
    console.log("for lavt");
  } else {
    text.textContent = "rigtigt";
    console.log("rigtigt");
  }
}

btn.addEventListener("click", clickhandler);
//
// console.log(inputValue);
