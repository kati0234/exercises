const list = document.querySelector("ul");
const vauleArr = [];
// generatebart();
// generatebart();
// sæt time interval
setInterval(generatebart, 1000);
function generatebart() {
  const random = Math.floor(Math.random() * 101);
  vauleArr.push(random);
  if (vauleArr.length > 19) {
    vauleArr.shift();
    list.removeChild(list.firstChild);
  }
  console.log(vauleArr);
  const li = document.createElement("li");
  li.style.setProperty("--height", random);
  //   list.length(vauleArr);

  list.appendChild(li);
}
