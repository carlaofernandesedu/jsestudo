
var varglobal = 3; 


function LetShadowVar() {
    //sobre escreve a variavel acima var varglobal
    let varglobal = 4; 
    return varglobal;
}

//constante precisa ser inicializada  e nao pode ser alterada
const xpto maxItens = 30; 

const person = { name: "Nicholas" }; 
person.name = "Greg"; // funciona;

person = { name: "Greg" };  //binding ao object nao nas suas propriedades nesse caso  prvent modification binding not bound value /(valores associados)

//area especifica para uso de variaveis let e const para serem disponiveis para uso apos sua declaracao


