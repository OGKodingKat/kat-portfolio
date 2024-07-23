//Method:1

// function getRandomColor() {
//     let letters = '0123456789ABCDEF'.split('');
//     let color = '#';
//     for (let i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//    $('p').css('color',color);
// }


// Method:2

// let randomColorHaxValues = Math.floor(Math.random()*16777215).toString(16);

// $('p').css('color',randomColorHaxValues);

// let randomColorRgbValues = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


const colorFormButton = document.getElementById("js-colors-btn");
const colorForm = document.getElementById("color-fun-form");


//js fun event listeners------------------------------------------------------------------------------------
colorFormButton.addEventListener("click", toggleColorForm);




//js fun toggle----------------------------------------------------------------------------------------------
function toggleColorForm() {
    document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
  }

//   function changeColor(colorFromUser, type) {
//     console.log(colorFromUser, type)
//     if(type === "background"){
//       colorForm.style.backgroundColor = colorFromUser;
//     } else {
//       colorForm.style.color = colorFromUser;
//     }
//     const color = document.getElementById("color").value;
//   colorForm.style.backgroundColor = colorFromUser;
    
//   }
  
//   //js fun colors submit functions
//   function onColorFormSubmit(event) {
//     console.log("color form submitted");
//       event.preventDefault();
//       const data = new FormData(event.target);
//       const dataObject = Object.fromEntries(data.entries());
//       console.log(dataObject);
//       colorForm.reset();
//       //above is boiler plate code
//       changeColor(dataObject.colorSelect, dataObject.typeSelect)
//   }