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

function textoDigitando(el, texto, intervalo) {
    const char = text.split("").reverse();

    const typer = setInterval(()=>{
        if(!char.length)
        {
            return clearInterval(typer);
        }
        const next = char.pop();

        elTexto.innerHTML += next
    }, interval);
}

textoDigitando(elTexto, text, interval)