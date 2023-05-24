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

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");
const bodyEl = document.getElementsByTagName("body")
console.log(hourEl);
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h;
    ampm = "PM";
  }else{
    ampm = "AM"
  }

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
setTimeout(() => {
    updateClock();
}, 1000);


bodyImages();
}
updateClock();

