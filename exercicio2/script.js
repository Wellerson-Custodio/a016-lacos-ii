const num = +prompt("digite um numero para obter a tabuada")


const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let index in tabuada){

    /* tabuada[index]* num */
    console.log("tabuada de :", num,  "x",tabuada[index] , "=", tabuada[index]* num );
    console.log(index)
}