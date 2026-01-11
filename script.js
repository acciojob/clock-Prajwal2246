//your JS code here. If required.
const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = new Date().toLocaleString();
body.appendChild(p);