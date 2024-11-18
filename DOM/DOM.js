const container = document.querySelector("#container");

const para = document.createElement("p");//Creates p elelment
para.classList.add("red");//Adds class "red"
para.textContent = "Hey I'm red!"//Updates the text
para.style.color = "red";//Changes text color to red
container.appendChild(para);//Adds new paragraph to container
