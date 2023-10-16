let meuMap = new Map();
meuMap.set("nome", "Yuri");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const meuNome = meuMap.get("nome");

console.log(meuNome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))


console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// set 

const cpfs = new Set();

cpfs.add('92811369023')
cpfs.add('99999999999')
cpfs.add('45454545454')

console.log(cpfs);

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['yuri vidal', 'leticia', 'yan', 'yan', 'yago']

const arrayComoSet = new Set([...array])

const arraySemItemDuplicado = [...arrayComoSet]


console.log(arrayComoSet);
console.log(arraySemItemDuplicado)



