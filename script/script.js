let inputTexto = document.getElementById("inputTexto")
let btn = document.getElementById('btn');
let inputBase = document.getElementById('inputBase');
let resultado = document.querySelector('.resultado');



btn.addEventListener('click', function(){
    resultado.innerHTML = codifica(inputTexto.value, parseInt(inputBase.value))
})


function codifica(str, base){
    let txtCodificado = "";
    let codigo = 0;

    for(let i = 0; i < str.length; i++){
        let asciiNum = str[i].charCodeAt()
        if(asciiNum >=65 && asciiNum <=90){
          codigo = (((asciiNum - 65) + base) % 26) + 65
        }
        txtCodificado += String.fromCharCode(codigo) 
    }
    return txtCodificado
}



//------------CODIGO PARA DEBUG--------------

// function rot13(str){
//     let solved = ""
//     for (let i= 0; i<str.length; i++){
//         let asciiNum = str[i].charCodeAt();
//         if (asciiNum >= 65 && asciiNum <= 77){
//             solved += String.fromCharCode(asciiNum + 13)
//         }else if(asciiNum >=78 && asciiNum <= 90){
//             solved += String.fromCharCode(asciiNum - 13)
//         }
//     }
//     return solved
   
// }
//     console.log(rot13("GABRIEL"))