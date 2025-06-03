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
const loginSenha = document.getElementById("loginSenha");



function showError(msg) {
  alert(msg);
}

/* Login*/

    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const emailValue = loginEmail.value.trim();
        const senhaValue = loginSenha.value.trim();

        if (!emailValue || !senhaValue){
            showError("Preencha o e-mail e senha para continuar.");
            return;
        }
        
        console.log("Login válido:", emailValue, "," , senhaValue);
    });


/* registro*/

const formRegistro = document.getElementById("formRegistro");
const emailRegistro = document.getElementById("emailRegistro");
const emailRepete = document.getElementById("emailRepete");
const senhaRegistro = document.getElementById("senhaRegistro");

    formRegistro.addEventListener("submit", function(event) {
        event.preventDefault();

        const emailRegistroValue = emailRegistro.value.trim();
        const emailRepeteValue = emailRepete.value.trim();
        const senhaRegistroValue = senhaRegistro.value.trim();

        if (!emailRegistroValue || !emailRepeteValue || !senhaRegistroValue){
            showError("Preencha todos os campos para prosseguir.")
            return;
        }

        if (emailRegistroValue != emailRepeteValue){
            showError("Os endereços de e-mail não coincidem.")
            return;
        }

        console.log("Login válido:", emailRegistroValue, "," , senhaRegistroValue);

    });