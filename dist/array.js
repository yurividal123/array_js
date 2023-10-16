"use strict";

var redesSociais = ['facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// metodo forEach

redesSociais.forEach(function (nomeDaRedeSocial) {
  console.log("Eu tenho perfil na rede social ".concat(nomeDaRedeSocial));
});

// metodo map

var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'frontend'
  };
});
console.log(alunos2);

// metodo find = buscar 

var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);

// metodo findIndex = buscar a posição 

var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// every = se todos forem o que é solicitado é true se não é false

alunos2.push({
  nome: 'lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso == 'frontend';
});
console.log(todosAlunosSaoDeFrontend);

// some se pelo menos um for o que é solicitado é true se não é false

var existeAlgumAlunodeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'frontend';
});
console.log(existeAlgumAlunodeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];

// reduce = pode ser para somatoria de numeros

var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);