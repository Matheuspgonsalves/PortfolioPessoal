const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("bg-dark")
    }
    else {
        navbar.classList.remove("bg-dark")
    }
})