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

document.addEventListener("DOMContentLoaded", () => {

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
    });

/* blog */

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM totalmente carregado - iniciando FAQ");
    const botoes = document.querySelectorAll(".blog-pergunta");

    botoes.forEach((botao) => {
        botao.addEventListener("click", () => {
            botoes.forEach((b) => {
                if(b !== botao) {
                    b.classList.remove("ativa");
                    const respOutra = b.nextElementSibling;
                    if(respOutra) {
                        respOutra.classList.remove("exibir");
                    }
                }    
        });
        const respostas  = botao.nextElementSibling;
        const estaAtiva =   botao.classList.toggle("ativa");
    
            if(respostas){
                if(estaAtiva) {
                    respostas.classList.add("exibir");
                }else {
                    respostas.classList.remove("exibir")
                }
            }
        });
    });
});

/* integrantes */

/*bruna*/

const setaBruna = document.querySelector (".setaBruna");
const fundoRoxoBruna = document.querySelector(".cardBruna .fundoRoxo");

setaBruna.addEventListener("click", function(){
    fundoRoxoBruna.classList.toggle("expanded");
    setaBruna.classList.toggle("rotated");
});

/* isabela*/
const setaIsabela = document.querySelector (".setaIsabela");
const fundoRoxoIsabela = document.querySelector(".cardIsabela .fundoRoxo");

setaIsabela.addEventListener("click", function(){
    fundoRoxoIsabela.classList.toggle("expanded");
    setaIsabela.classList.toggle("rotated");
});



