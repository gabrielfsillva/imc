const calcular = document.getElementById('calcular');

    function imc () {
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;
        const altura = document.getElementById('altura').value;
        const peso = document.getElementById('peso').value;
        const resultado = document.getElementById('resultado');

        if (nome !== '' && idade !== '' && altura !== '' && peso !== '') {

            const valorIMC = (peso / (altura * altura)).toFixed(1);
            const valorWater = (peso * 35)

            let classificacao = '';

            if (valorIMC < 18.5){
                classificacao = 'abaixo do peso normal.';
            }else if (valorIMC < 25) {
                classificacao = 'com peso normal. Parabéns!!!';
            }else if (valorIMC < 30){
                classificacao = 'excesso de peso.';
            }else if (valorIMC < 35){
                classificacao = 'obesidade classe I.';
            }else if (valorIMC < 40){
                classificacao = 'obesidade classe II';
            }else {
                classificacao = 'obesidade classe III. Cuidado!!';
            }

            resultado.textContent = `Olá ${nome}, seu IMC é ${valorIMC} e você está ${classificacao} 
            A quantidade de água necessária para o funcionamento do seu corpo é de ${valorWater}ml`;
            
        }else {
            resultado.textContent = 'Preencha todos os campos!';
        }

    }

    calcular.addEventListener('click', imc);