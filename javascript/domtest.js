let h1 = document.createElement("h1");
let h12 = document.createElement("h1");
h12.innerText = "this is second h1";
h1.innerText = "enter into input form";

let inp = document.createElement("input");
inp.setAttribute("type", "text");

document.body.innerText = "";
document.body.appendChild(h1);
document.body.appendChild(inp);
document.body.appendChild(h12);

inp.addEventListener("change", function () {
  console.log(inp.value);
  h1.innerText = inp.value;
});

let hs = document.querySelectorAll("h1");
//console.log(hs);
for (var i = 0; i < hs.length; i++) {
  console.log(hs[i].innerText);
}
