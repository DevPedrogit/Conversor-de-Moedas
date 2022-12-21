let moeda1 = document.querySelector('.moeda1');
let moeda2 = document.querySelector('.moeda2');

moeda1.addEventListener('change',() => {
});

moeda2.addEventListener('change', () => {
})

function converter () {
    let inputReceberValor = document.querySelector('.receber-valor').value;
    let moeda1 = document.querySelector('.moeda1').value;
    let moeda2 = document.querySelector('.moeda2').value;
    let mostraResultado = document.querySelector('.resultado > p');
    
    if (moeda1 === 'Dólar' && moeda2 === 'Real') {
        let soma = inputReceberValor * 5.41;
        mostraResultado.innerHTML = `${inputReceberValor} USD = ${soma.toFixed(2)} R$`;
        
    } else {
        if (moeda1 === 'Real' && moeda2 === 'Dólar') {
            let soma = inputReceberValor * 0.18;
            mostraResultado.innerHTML = `${inputReceberValor} R$ = ${soma.toFixed(2)} USD`;
            
        } else if (moeda1 === 'Real' && moeda2 === 'Euro') {
            let soma = inputReceberValor * 0.18;
            mostraResultado.innerHTML = `${inputReceberValor} R$ = ${soma.toFixed(2)} EUR`;
            
        } else if (moeda1 === 'Euro' && moeda2 === 'Real') {
            let soma = inputReceberValor * 5.62;
            mostraResultado.innerHTML = `${inputReceberValor} EUR = ${soma.toFixed(2)} R$`;
            
        } else if (moeda1 === 'Dólar' && moeda2 === 'Euro') {
            let soma = inputReceberValor * 0.96;
            mostraResultado.innerHTML = `${inputReceberValor} USD = ${soma.toFixed(2)} EUR`;
            
        } else if (moeda1 === 'Euro' && moeda2 === 'Dólar') {
            let soma = inputReceberValor * 1.04;
            mostraResultado.innerHTML = `${inputReceberValor} EUR = ${soma.toFixed(2)} USD`;
        }
           
    }
}

