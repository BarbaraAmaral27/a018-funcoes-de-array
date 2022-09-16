const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
function alterarMaiusculas(parametro){
    objeto.nome = objeto.nome.toUpperCase()
    objeto.profissao = objeto.profissao.toUpperCase()
    objeto.username = objeto.username.toUpperCase()
    objeto.senha = objeto.senha.toUpperCase()
    return parametro
}

console.log(alterarMaiusculas(objeto))
 
//Resposta 1 - usando for in para percorrer por todo meu array

// function alterarMaiusculas(parametro){
//     for (let i in parametro){
//         parametro[i] = parametro[i].toUpperCase()
// }
//     return parametro
// }

// console.log(alterarMaiusculas(objeto))

//2
function textoCorrido(parametro){
    return `${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha} `
}

console.log(textoCorrido(objeto))

//3
function receberCallBack(obj,funCall){
    return funCall(obj)
}

console.log(receberCallBack(objeto,alterarMaiusculas))
console.log(receberCallBack(objeto,textoCorrido))
