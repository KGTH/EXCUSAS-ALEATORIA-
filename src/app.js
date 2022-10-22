/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let elemento = document.querySelector(".excuse");
  elemento.innerHTML = aleatorio();
};

let aleatorio = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let aleatoriowho = Math.floor(Math.random() * who.length);
  let aleatoriowhat = Math.floor(Math.random() * what.length);
  let aleatoriowhen = Math.floor(Math.random() * when.length);

  return `${who[aleatoriowhat]} ${what[aleatoriowhen]} ${when[aleatoriowho]}`;
};
