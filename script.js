
const usernameInput = document.getElementById('login-usuario')
const errorText = document.querySelectorAll('.error-text')

const passwordInput = document.getElementById('login-senha')
const section = document.querySelector('section')
const title = document.querySelector('h2')
const label = document.querySelectorAll('label')
const button = document.querySelector('button')


//User errou o name
usernameInput.classList.add('error')
errorText[0].classList.add('visible')


// Usuário acertou username mas errou senha


//remover clases que dão estilos de erro no campo
usernameInput.classList.remove('error')
errorText[0].classList.remove('visible')


//adicionar classe de estilo de acerto no campo username
usernameInput.classList.add('correct')

//adicionar classes que da estilo de erro do campo senha

passwordInput.classList.add('error')
errorText[1].classList.add('visible')

//mudar cor do formulario

section.style.background = '#ce3633'
title.style.color = '#2f2e30'
label[0].style.color = "#2f2e30"
label[1].style.color = "#2f2e30"
button.style.background = '#7cd164'
button.style.color = '#2f2e30'

//bordas da section
section.style.borderRadius ='16px'
button.style.borderRadius = '10px'

