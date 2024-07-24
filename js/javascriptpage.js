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
const colorForm = document.getElementById("color-form");
colorFormButton.addEventListener("click", toggleColorForm);
colorForm.addEventListener("submit", onColorFormSubmit)

function toggleColorForm() {
    console.log("click")
    let wrapper = document.getElementById("color-form")
    console.log(wrapper)
    wrapper.classList.toggle("display-none");
  }

function changeColor(selectedColor, type) {
    console.log(selectedColor, type)
    if(type === "background"){
      colorForm.style.backgroundColor = selectedColor;
    } else {
      colorForm.style.color = selectedColor;
    }
  }
  function onColorFormSubmit(event) {
    console.log("color form submitted");
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
      console.log(dataObject);
      colorForm.reset();
      //above is boiler plate code
      changeColor(dataObject.chooseColor, dataObject.chooseType)
  }
