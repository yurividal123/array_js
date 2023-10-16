// arrow funcion = uma forma mais simplificada de ter retorno

const minhaFuncao = () => "diz oi";

const retornaUmCarro = () => ({
        modelo: 'Ka',
        fabricante: 'Ford'
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10;
    },
    frear: () => {
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)