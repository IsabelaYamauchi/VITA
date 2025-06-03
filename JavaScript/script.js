/*animação do header*/

const header = document.querySelector('.header');

function handleScroll() {
    if(window.scrollY > 20) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}

window.addEventListener('scroll', handleScroll);

/* Formulario */

const formLogin = document.getElementById("formLogin");
const loginEmail = document.getElementById("loginEmail");
const loginSenha = documento.getElementById("loginSenha");

const formRegistro = document.getElementById("formRegistro");
const emailRegistro = document.getElementById("emailRegistro");
const emailRepete = document.getElementById("emailRepete");
const senhaRegistro = document.getElementById("senhaRegistro");

/* Login*/

formLogin.addEventListener ("submit"), function (event) {
    event.preventDefault();
}

    const emailValue = loginEmail.value.trim();
    const senhaValue = loginSenha.value.trim();

    if (!emailValue || !senhaValue){
        showError("Preencha o e-mail e senha para continuar.");
        return;
    }

    if(!isValidEmail(emailValue)) {
        showError("Formato de e-mail inválido. Verifique e tente novamente.");
        return;
    }

    