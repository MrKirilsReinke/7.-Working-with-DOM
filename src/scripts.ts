console.log(document.querySelector(".custom-col-1"));

const button1 = document.querySelector(".btn.btn-1");
const firstCol = document.querySelector<HTMLElement>(".custom-col-1.first-col");

let butonPressed = false; 

button1.addEventListener("click", function () {
    butonPressed = true;
    firstCol.style.backgroundColor = "yellow";
});

firstCol.addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
});

firstCol.addEventListener("mouseout", function () {
    if (butonPressed) {
        this.style.backgroundColor = "yellow";
    }
    else {
        this.style.backgroundColor = "#1FC2AE";  
    }
});

const button2 = document.querySelector(".btn.btn-2");
const secondCol = document.querySelector<HTMLElement>(".custom-col-1.second-col");

button2.addEventListener("click", function () {
    secondCol.innerText = "SUCCESS";
    secondCol.classList.add("success-text");
});

const button3 = document.querySelector(".btn.btn-3");
const thirdCol = document.querySelector<HTMLElement>(".custom-col-1.third-col");

button3.addEventListener("click", function () {
    thirdCol.style.visibility = "hidden";
});

const button4 = document.querySelector(".btn.btn-4");
const fourthCol = document.querySelector<HTMLElement>(".custom-col-1.fourth-col");


button4.addEventListener("click", numOfClicks);

let btn4ClickCounter = 0;

function numOfClicks() {
    btn4ClickCounter += 1;
    if (btn4ClickCounter % 2 !== 0) {
        fourthCol.style.visibility = "hidden";
    }
    else {
        fourthCol.style.visibility = "visible";
    }
}

const button5 = document.querySelector(".btn.btn-5");
const fifthCol = document.querySelector<HTMLElement>(".custom-col-1.fifth-col");

const colors: string[] = ["lightblue", "purple", "lightgreen", "pink", "orange"];

button5.addEventListener("click", btn5Clicks);

let btn5ClickCounter = 0;

function btn5Clicks() {
    btn5ClickCounter += 1;

    for (let i = 0; i < colors.length; i++) {
        fifthCol.style.background = colors[btn5ClickCounter - 1];
    }
    
    if (btn5ClickCounter === 5) {
        btn5ClickCounter = 0;
    }
}

const button6 = document.querySelector(".btn.btn-6");
const sixthCol = document.querySelector<HTMLElement>(".custom-col-1.sixth-col");

button6.addEventListener("click", function() {
    let number = 0;
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(function() {
        number++;
        sixthCol.innerHTML = number.toString();
        if (number === 10) {
            clearInterval(intervalId);
        }
    }, 3000);
});

const button7 = document.querySelector(".btn.btn-7");

button7.addEventListener("click", function() {
    document.body.style.background = "black";
})