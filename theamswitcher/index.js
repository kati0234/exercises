let themeSwitcher = document.querySelector(".theme_switcher");
let body = document.querySelector("body");
const dataTheme = body.getAttribute("data-theme");

themeSwitcher.addEventListener("change", (event) => {
  choseTheme(event.target.value);
});

function choseTheme(themeSwitcher = "green") {
  if (themeSwitcher == "green") {
    console.log("theme er green");
    body.setAttribute("data-theme", "green");
  } else if (themeSwitcher == "lilla") {
    console.log("lilla");
    body.setAttribute("data-theme", "lilla");
  } else {
    console.log("pink");
    body.setAttribute("data-theme", "pink");
  }
}

choseTheme();
