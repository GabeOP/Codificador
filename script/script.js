let texto = document.getElementById("texto")
let btn = document.getElementById('btn');
let base = document.getElementById('numero');
let resultado = document.querySelector('.resultado')

btn.addEventListener('click', rot13)
function rot13() {
    let solved = ""
    for (let i = 0; i < texto.value.length; i++) {
        let asciiNum = texto.value[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77) {
            solved += String.fromCharCode(asciiNum + parseInt(base.value))
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - parseInt(base.value))
        }
    }
    resultado.innerHTML = `Texto codificado: ${solved}`
    console.log(solved)
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