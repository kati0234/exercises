// let theText = " jeg er en text hvor ord skal skiftes ud med andre ord ";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const P = document.querySelector("#text");
const chekBNT = document.querySelector(".chek");
const closeBNT = document.querySelector(".close");

function skift() {
  curseWords.forEach((word) => {
    P.textContent = P.textContent.replaceAll(word.bad, word.good);
  });
}

chekBNT.addEventListener("click", skift);

// let badVar = P.innerHTML.replaceAll( ${curseWords[0].bad});

// const skift = P.replaceAll("var" "float" "marquee");

// const regex = var;
// console.log(skift);

// const ny = P.replaceAll()

function good() {}
function bad() {}
