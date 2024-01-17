// CRIAR CONSTANTES

const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.inputs')
const span = document.querySelectorAll('.span-required')
const cspan = document.querySelectorAll('.span-correct')
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senha = document.getElementById('senha')
// expressão regular regex

// VALIDAR TODOS OS CAMPOS ANTES DE ENVIAR

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validarNome();
    validarEmail();
    validarSenha();
    senhasIguais();
})

//CRIAR FUNÇÃO: VALIDAR NOME

function validarNome(){
    if(campos[0].value.length < 5){
        verErro(0)
    } else {
        removerErro(0)
    }

    if(campos[0].value.length > 4){
        verAcerto(0)
    } else {
        removerAcerto(0)
    }
}

//CRIAR FUNÇÃO: ERRO

function verErro(index){
    campos[index].style.border = '2px solid #e63636'
    span[index].style.display = 'block'
}

function removerErro(index){
    campos[index].style.border = ''
    span[index].style.display = 'none'
}

function removerAcerto(index){
    cspan[index].style.display= 'none'
}

function verAcerto(index){
    campos[index].style.border = '2px solid #3BB143'
    cspan[index].style.display= 'block'
}

//FUNÇÃO: VALIDAR EMAIL

function validarEmail(){
    if (emailregex.test(campos[1].value)){
        removerErro(1)
        verAcerto(1)
    } else {
        verErro(1)
        removerAcerto(1)
    }
}

// FUNÇÃO: VALIDAR SENHA

function validarSenha(){
    if(campos[2].value.length < 6){
        verErro(2)
        removerAcerto(2)
    } else {
        verAcerto(2)
        removerErro(2)
        senhasIguais()
    }
}

function senhasIguais(){
    if(campos[2].value == campos[3].value && campos[3].value.length >=6){
        removerErro(3)
        verAcerto(3)
    } else {
        verErro(3)
        removerAcerto(3)
    }
}

