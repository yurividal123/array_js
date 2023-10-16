function funcaoMuitoPesada() {
    let execucoes = 0;

    for (let i = 0; i < 1000000000; i++ ) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++ ) {
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('Deu erro na interação dos números');
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`logado com o usuário: ${login}`)
        }, 3000)
    })
}




console.log("inicio")
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
console.log("fim")

async function execucaoPrincipal() {
    console.log("inicio")

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    promiseComParametros('yurividal123@hotmail.com', 123456).then((resultado) => {
        console.log(resultado)
    })
    
    const resultado = await funcaoMuitoPesadaPromise
    console.log(resultado)

console.log("fim")
}

execucaoPrincipal()