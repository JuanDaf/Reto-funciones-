function soloretorno() {
    return true
}

console.log(soloretorno())

setTimeout(()=>{console.log("Hola soy una promesa")},"500")

function* pares(){
    let indice = 2
    while(indice<=16){
        yield indice
        indice *= 2;
    }
}

const gen =pares()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())