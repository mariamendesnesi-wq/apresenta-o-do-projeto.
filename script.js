// Menu mobile

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Fecha o menu quando clicar em um link

const links = document.querySelectorAll("#menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// Botão para voltar ao topo

const topBtn = document.getElementById("top-btn");

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Atualiza automaticamente o ano do rodapé

document.getElementById("ano").textContent =
    new Date().getFullYear();


// Animação simples ao aparecer na tela

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);
});