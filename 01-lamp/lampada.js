const button = document.getElementById("button");
const lamp = document.getElementById("lamp");
const text = document.getElementById("text");

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1;
}

function lampBroken(){
    lamp.src = "./img/quebrada.jpg";
    text.textContent = "Ai não! A lâmpada quebrou!";
    button.style.display = "none";
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = "./img/ligada.jpg";
        text.textContent = "A lâmpada está acesa!";
        button.textContent = "Desligar"
    }
}

function lampOff() {
    if (!isLampBroken()){
        lamp.src = "./img/desligada.jpg";
        text.textContent = "A lâmpada está apagada!";
        button.textContent = "Ligar"
    }
}

function lampAlternate(){
    if(button.textContent == "Ligar"){
        lampOn();
        button.textContent = "Desligar";
    }
    else
    {
        lampOff();
        button.textContent = "Ligar";
    }
}

button.addEventListener("click", lampAlternate);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);