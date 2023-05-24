const calInputEl = document.querySelector("#cal__input")
console.log(calInputEl)
const numberEl = document.querySelector("#number")
let inputValue ="0";


updateInput()
function updateInput() {
      calInputEl.value += inputValue;
}


numberEl.addEventListener("click", (e)=>{
const element = e.target
inputValue += element




})