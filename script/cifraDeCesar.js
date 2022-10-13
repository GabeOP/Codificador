let inputTexto = document.getElementById("inputTexto")
let btn = document.getElementById('btn');
let inputBase = document.getElementById('inputBase');
let resultado = document.querySelector('.resultado');

let baseContainer = document.getElementById('baseContainer');
let escolherDecodificacao = document.getElementById('escolherDecodificacao');


escolherDecodificacao.addEventListener('change', base);

function base() {
    if (escolherDecodificacao.value == 1) {
        baseContainer.style.display = 'block'
    } else {
        baseContainer.style.display = 'none'
    }
}

btn.addEventListener('click', function () {
    resultado.innerHTML = codifica(inputTexto.value, parseInt(inputBase.value))
})

function codifica(str, base) {
    let txtCodificado = "";

    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            codigo = (((asciiNum - 65) + base) % 26) + 65
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            codigo = (((asciiNum - 97) + base) % 26) + 97
        }
        txtCodificado += String.fromCharCode(codigo)
    }
    return txtCodificado
}
