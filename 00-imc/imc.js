const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = "abaixo do peso."
        }
        else if(valorIMC >= 18.5 && valorIMC <= 24.9){
            classificacao = "com peso normal."
        }
        else if(valorIMC >= 25 && valorIMC <= 29.9){
            classificacao = "sobrepeso."
        }
        else if(valorIMC >= 30 && valorIMC <= 34.9){
            classificacao = "com Obesidade Grau I"
        }
        else if(valorIMC >= 35 && valorIMC <= 39.9){
            classificacao = "com Obesidade Grau II"
        }
        else if(valorIMC >= 40 && valorIMC <= 49.9){
            classificacao = "com Obesidade Grau III"
        }
        else if(valorIMC >= 50 && valorIMC <= 59.9){
            classificacao = "com Obesidade Grau IV"
        }
        else if(valorIMC > 59.9){
            classificacao = "com Obesidade Grau V"
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
    }
    else
    {
        resultado.textContent = "Preencha todos os campos!"
    }
}
calcular.addEventListener('click', imc);