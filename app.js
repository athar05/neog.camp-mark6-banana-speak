var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input")
var textOutput = document.querySelector("#output-text")

// textOutput.innerText = "Athar"

function clickHandler() {
       textOutput.innerText = "asdasdsds " + textInput.value;
    };

btnTranslate.addEventListener("click", clickHandler)



