

var buttonWinkelwagen1 = document.querySelector("button.eersteButton");
var buttonWinkelwagen2 = document.querySelector("button.tweedeButton");
var buttonWinkelwagen3 = document.querySelector("button.derdeButton");

/* Variabele aanmaken voor bom button*/
var bodyElement = document.querySelector("body");
var buttonElement = document.querySelector("button.bomb")

/* Variabele aanmaken voor bom button*/
var buttonConfettiElement = document.querySelector("button.confetti")
var bodyyElement = document.querySelector("body")



buttonElement.addEventListener("click",function(){
    bodyElement.classList.add("glitch");
});

buttonConfettiElement.addEventListener("click",function(){
  bodyyElement.classList.toggle("shot");
});




/* de button laten luisteren naar clicks */
buttonWinkelwagen1.addEventListener("click", veranderButton1);
buttonWinkelwagen2.addEventListener("click", veranderButton2);
buttonWinkelwagen3.addEventListener("click", veranderButton3);




function veranderButton1() {
  /* de p in de vierde section selecteren */
  let buttonElement1 = document.querySelector("button.eersteButton");
  /* de class 'anders' aan de p toevoegen */
  /* en bij de tweede maal klikken de class 'anders' weer verwijderen */
  buttonElement1.classList.toggle("verander1");
  /* toggle voegt toe en verwijdert om-en-om */
}

function veranderButton2() {

  let buttonElement2 = document.querySelector("button.tweedeButton");

  buttonElement2.classList.toggle("verander2");
}

function veranderButton3() {

  let buttonElement3 = document.querySelector("button.derdeButton");

  buttonElement3.classList.toggle("verander3");
}

function veranderWinkelIcon() {
 let sectionElement = document.querySelector("header section")
 
}




