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
const elNavbar = document.querySelector(".navbar");
const elHouse = document.querySelector(".house");
const elAbout = document.querySelector(".about-me");
const elProjetos = document.querySelector(".project");
const elContato = document.querySelector(".contact");

//evento de animacao do menu lateral
elMenuLateral.addEventListener("click", showMenu);

//Funcao para animacao do menu lateral
function showMenu()
{
    if(elNavbar.classList.contains("open")){
        elNavbar.classList.remove("open");
        elHouse.innerHTML = 
        `
        <a class="nav-link house" href="#home">
            <li><i class="bi bi-house-door"></i></li>
        </a>
        `
        elAbout.innerHTML = 
        `
        <a class="nav-link about-me" href="#sobre">
            <li><i class="bi bi-file-person"></i></li>
        </a>
        `
        elProjetos.innerHTML = 
        `
        <a class="nav-link project" href="#projetos">
            <li><i class="bi bi-kanban-fill"></i></li>
        </a>
        `
        elContato.innerHTML = 
        `
        <a class="nav-link contact" href="#contato">
            <li><i class="bi bi-person-circle"></i></li>
        </a>
        `
    }else {
        elNavbar.classList.add("open");
        elHouse.innerHTML = 
        `
        <a class="nav-link house" href="#home">
            <li><i class="bi bi-house-door"></i><span class="spanNav">Home</span></li>
        </a>
        `
        elAbout.innerHTML = 
        `
        <a class="nav-link about-me" href="#sobre">
            <li><i class="bi bi-file-person"><span class="spanNav">Sobre Mim</span></i></li>
        </a>
        `
        elProjetos.innerHTML = 
        `
        <a class="nav-link project" href="#projetos">
            <li><i class="bi bi-kanban-fill"><span class="spanNav">Projetos</span></i></li>
        </a>
        `
        elContato.innerHTML = 
        `
        <a class="nav-link contact" href="#contato">
            <li><i class="bi bi-person-circle"><span class="spanNav">Contato</span></i></li>
        </a>
        `
    }
}