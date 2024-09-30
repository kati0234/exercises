// beder document.querySelector

//const btns = document.querySelectorAll("button");

//$$("button");

//const div = document.querySelector("div");

//$("div");

export function $(element) {
  return document.querySelector(element);
}
export function $$(element) {
  return document.querySelectorAll(element);
}
