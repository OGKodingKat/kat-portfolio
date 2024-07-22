// import projectData from "./data.js";

// let response = document.getElementsByClassName("project-section");

// function displayData(projectData) {
// 	// console.log(sentence)
// 	response.textContent = projectData;
// }

// function displayCards() {
//     for (let item of projectData) {
//         let makeCard = document.createElement("div");
//         makeCard.className = "card";
//         makeCard.innerHTML = `
//         <h4>${item.title}</h4>
//         <img src=${item.image} alt="${item.imageAlt}">
//         <p>${item.description}</p>
// 		<a href="${item.link}">Follow To Page</a>
//         `
		
//         document.querySelector(".card-wrapper").appendChild(makeCard);
//     }
// }
// displayCards()

document.querySelector(".burger").addEventListener("click", showHamburger)
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}

// console.log("hello beautiful");
console.log(projectData);