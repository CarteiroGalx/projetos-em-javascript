const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const text = document.getElementById("text");

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampBroken(){
    lamp.src = "./img/quebrada.jpg"
    text.textContent = "Ai não! A lâmpada quebrou!"
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = "./img/ligada.jpg"
        text.textContent = "A lâmpada está acesa!"
    }
}

function lampOff() {
    if (!isLampBroken()){
        lamp.src = "./img/desligada.jpg"
        text.textContent = "A lâmpada está apagada!"
    }
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);