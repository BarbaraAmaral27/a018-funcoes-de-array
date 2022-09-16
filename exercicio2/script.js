const arrayNumeros = [2,7,8,10,15,23,30,33]
console.log("Array original:", arrayNumeros)

//1
const triplos = arrayNumeros.map((parametro) => {
    resultado = parametro * 3
    return resultado
})

console.log("Os valores do array multiplicados por 3, são:", triplos)

//2
const metades = arrayNumeros.map((parametro) =>{
    resultado = parametro / 2
    return resultado
})

console.log("Os valores do array divididos por 2, são:", metades)

