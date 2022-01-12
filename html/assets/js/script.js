













let nome = document.getElementById('nome')
let email = document.getElementById('email')

function validarNome(){
    let texto = document.querySelector('#msgTexto')

    if (nome.value.lenght > 3) {
        texto.innerHTML = 'Tamanho já tá bom'
        texto.style.color = 'green'
    } else {
        texto.innerHTML - 'Nome precisa ser maior do que isso'
        texto.style.color = 'red'
    }
}

function validaEmail() {
    let msgEmail = document.querySelector('#msgEmail')
    let padrao = /^\w(+[\.-]?\w+)*@\w+([\.-]?\w+)*(\*\w{2,3})+$/

    if (email.value.match(padrao)){
        msgEmail.innerHTML = 'email valido'
    } else {
        msgEmail.innerHTML = 'email invalido'
    }
}