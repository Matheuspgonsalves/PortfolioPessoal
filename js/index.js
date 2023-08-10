/* Texto que aparece como se fosse digitando */
const text = 'Desenvolvedor Front-End'

function digitando()
{
    for(let i = 0; i < text.length; i++)
    {
        setTimeout(()=>
        {
            elTexto.innerHTML += text[i];
        },i*100);
    }
}

document.addEventListener("DOMContentLoaded", digitando);

/* Configurações de estilização da navbar*/

//Variaveis
const navbar = document.querySelector(".navbar");
const elTexto = document.querySelector(".typing");
const elMenuLateral = document.querySelector(".menu-lateral");
const elDireita = document.querySelector(".direita");

//Animacao da navbar quando o scroll for acionado.
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("bg-dark");
    }
    else {
        navbar.classList.remove("bg-dark");
    }
})

//Animacao do menu lateral
elMenuLateral.addEventListener("click", ()=>{
    
})



