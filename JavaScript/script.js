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

/* */