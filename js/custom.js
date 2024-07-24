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

// // Select the button element
// const backButton = document.getElementById("back-to-main-btn");

// // Add event listener for button click
// backButton.addEventListener("click", function() {
//     // Navigate to the main page URL
//     window.location.href = "https://ogkodingkat.github.io/kat-portfolio/"

// });



// console.log("hello beautiful");
// console.log(projectData);