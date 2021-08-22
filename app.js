var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input")
var textOutput = document.querySelector("#output-text")

// textOutput.innerText = "Athar"

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslattionURL(text) {
    return url + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong. Please try again in some time")
}

function clickHandler() {
       var inputText = textInput.value;

       fetch(getTranslattionURL(inputText))
       .then(response => response.json())
       .then(json => {

        var translatedText = json.contents.translated;
        
        textOutput.innerText = translatedText; 
       })   
       .catch(errorHandler)
    };

btnTranslate.addEventListener("click", clickHandler)



