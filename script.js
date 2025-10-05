const item = document.getElementsByClassName("item");
console.log(item);
const divs = document.getElementsByTagName("div");
console.log(divs);
const secreto = document.getElementById("secreto");
//secreto.textContent = "No te voy a decir";
console.log(secreto.className);

/*
document.getElementsByTagName("h3")[0].setAttribute("class","main-title");
document.querySelector(".button").removeAttribute("class");
const img_url = document.getElementById("main-img").getAttribute("src");
document.write(img_url);
*/

const btn = document.querySelector(".button");
btn.textContent = "Elemento súper secreto";
btn.id = "main-button";
btn.classList;
if(btn.classList.contains("blue")){
    btn.classList.remove("blue");
    btn.classList.add("green");
} else console.log("No tiene la clase 'blue'.");

