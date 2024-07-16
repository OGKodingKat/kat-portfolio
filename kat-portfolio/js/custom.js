import projectData from "./data.js";

let response = document.getElementsByClassName("project-section");

function displayData(projectData) {
	// console.log(sentence)
	response.textContent = projectData;
}
// console.log("hello beautiful");
console.log(projectData);