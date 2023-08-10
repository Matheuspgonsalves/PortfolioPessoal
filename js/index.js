//Variaveis
const navbar = document.querySelector(".navbar");
const elTexto = document.querySelector(".typing");
const text = 'Desenvolvedor Front-End'
const interval = 60;




window.addEventListener("scroll", () => {//Animacao da navbar quando o scroll for acionado.
    if (window.scrollY > 40) {
        navbar.classList.add("bg-dark");
    }
    else {
        navbar.classList.remove("bg-dark");
    }
})

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