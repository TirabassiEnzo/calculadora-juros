function calcular(){
    let capital = Number(document.getElementById("capital").value);
    let taxa = Number(document.getElementById("taxa").value) / 100;
    let tempo = Number(document.getElementById("tempo").value);
    let tipoJuros = document.getElementById("tipoJuros").value;
    
    let valorJuros, valorMontante;
    
    if(tipoJuros === "simples"){
        valorJuros = capital * taxa * tempo
        valorMontante = capital + valorJuros
    }
    else{
        valorMontante = capital * Math.pow(1 + (taxa), tempo)
        valorJuros = valorMontante - capital
    }

    document.getElementById("resultado2").innerText = `Total de Juros: R$ ${valorJuros.toFixed(2)}`
    document.getElementById("resultado").innerText = `Montante Final: R$ ${valorMontante.toFixed(2)}`   
}

function limparDados(){
    document.getElementById("capital").value = " "
    document.getElementById("taxa").value = " "
    document.getElementById("tempo").value = " "
    document.getElementById("tipoJuros").value = " "
    document.getElementById("resultado2").innerText = " "
    document.getElementById("resultado").innerText = " "
}

