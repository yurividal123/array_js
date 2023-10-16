// spread não é um array, forma de somar sem o array

function somar() {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma; 
}

console.log(somarComRest(10, 20, 30))

// spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timedeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timedeFutebolDeRj = [ 'vasco', 'flamengo', 'fluminense', 'botafogo'];

// const timedeFutebol = timedeFutebolDeSp.concat(timedeFutebolDeRj);
const timedeFutebol = [...timedeFutebolDeSp, ...timedeFutebolDeRj];

// timedeFutebolDeSp.concat(timedeFutebolDeRj);

console.log(timedeFutebol);

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor:1.8
}

console.log(carroDaAna)

// destruturação

const { motor: motorDoCarroDaAna} = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);


const [item1, item2, item3, ...outrosTimes] = timedeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)