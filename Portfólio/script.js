const links = document.querySelectorAll("a");
const secoes = document.querySelectorAll("main section");

links.forEach(link => {
    link.addEventListener("click", () => {
        const destino = link.getAttribute("href");
        const secao = document.querySelector(destino);
        secoes.forEach(secao => {
            secao.classList.add("escondido");
    });
    secao.classList.remove("escondido");
});
});