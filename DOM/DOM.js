const container = document.querySelector("#container");

const para = document.createElement("p");//Creates p elelment
para.classList.add("red");//Adds class "red"
para.textContent = "Hey I'm red!"//Updates the text
para.style.color = "red";//Changes text color to red
container.appendChild(para);//Adds new paragraph to container

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
container.appendChild(h3);

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
h1.style.color = "white";
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
para2.style.color = "white";

newDiv.appendChild(h1);
newDiv.appendChild(para2);
container.appendChild(newDiv);
