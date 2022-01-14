let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false

function validarNome(){
    let texto = document.querySelector('#txtNome')

    if (nome.value.length > 3){
        texto.innerHTML = '✓'
        texto.style.color = 'green'
        nomeOk = true
    } else {
        texto.innerHTML = 'X Nome muito curto'
        texto.style.color = 'rgb(190, 0, 0)'
    }
}

function validarEmail(){
    let texto = document.querySelector('#txtEmail')

    if (email.value.indexOf('@' && '.') == -1){
        
        texto.innerHTML = 'X E-mail Inválido'
        texto.style.color = 'rgb(190, 0, 0)'
    } else {
        texto.innerHTML = '✓'
        texto.style.color = 'green'
        emailOk = true
    }
}

function validarComentario(){
    let txtComentario = document.querySelector('#txtComentario')

    if (comentario.value.length > 100){
        txtComentario.innerHTML = 'X Texto muito grande, digite no máximo 100 caracteres'
        txtComentario.style.color = 'rgb(190, 0, 0)'
    } else if(comentario.value.length <= 99){
        txtComentario.innerHTML = ' '
        comentarioOk = true
    }

}

function enviar(){
    if (nomeOk == true && emailOk == true && comentarioOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!')
    }
}