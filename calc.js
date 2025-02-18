function somar(a, b){
    let valor1 = a;
    let valor2 = b

    if(valor1 === ""){
        return console.log('por favor digitar um numero valido!')
    }

    if(valor2 === ""){
        return console.log('por favor digitar um numero valido!')
    }

    if(valor2 < 1){
        return console.log('por favor digitar um numero valido!')
    }

    let total = valor1 + valor2

    return console.log(total)
}

somar(10, 2)