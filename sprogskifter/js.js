"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

let header = document.querySelector(".header");
let footer = document.querySelector(".footer");
let sprog = document.querySelector(".sprog-skift");

sprog.addEventListener("change", (event) => {
  setTextContent(event.target.value);
});

function setTextContent(sprog = "da") {
  if (sprog == "da") {
    console.log("sproget er sat til dansk");
    header.textContent = texts.da.texts[0].text;
    footer.textContent = texts.da.texts[1].text;
  } else {
    console.log("sproget er sat til tysk");
    header.textContent = texts.de.texts[0].text;
    footer.textContent = texts.de.texts[1].text;
  }
}

setTextContent();
