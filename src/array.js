const redesSociais = ['facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// metodo forEach

redesSociais.forEach(function(nomeDaRedeSocial) {
    console.log(`Eu tenho perfil na rede social ${nomeDaRedeSocial}`)
})

// metodo map

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'frontend'
    }
})

console.log(alunos2)

// metodo find = buscar 

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

// metodo findIndex = buscar a posição 

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indiceDaPaula)


// every = se todos forem o que é solicitado é true se não é false

alunos2.push({
    nome: 'lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso == 'frontend'
})

console.log(todosAlunosSaoDeFrontend);

// some se pelo menos um for o que é solicitado é true se não é false

const existeAlgumAlunodeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'frontend'
})

console.log(existeAlgumAlunodeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend);

const nums = [10 , 20, 30, 10]

// reduce = pode ser para somatoria de numeros

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')
console.log(nomesDosAlunos)























