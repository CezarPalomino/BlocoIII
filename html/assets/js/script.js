let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validarNome(){
    let texto = document.querySelector('#txtNome')

    if (nome.value.length > 3){
        texto.innerHTML = '✓'
        texto.style.color = 'green'
        nomeOk = true
    } else {
        texto.innerHTML = 'X Nome muito curto'
        texto.style.color = 'red'
    }
}

function validarEmail(){
    let texto = document.querySelector('#txtEmail')

    if (email.value.indexOf('@' && '.') == -1){
        
        texto.innerHTML = 'X E-mail Inválido'
        texto.style.color = 'red'
    } else {
        texto.innerHTML = '✓'
        texto.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
    } else if(assunto.value.length <= 99){
        txtAssunto.innerHTML = ' '
        assuntoOk = true
    }

}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!')
    }
}

/*function mapaZoom(){
    mapa.style.width = '300px'
    mapa.style.height = '150px'
}

function mapaNormal(){
    mapa.style.width = '200px'
    mapa.style.height = '125px'
}*/