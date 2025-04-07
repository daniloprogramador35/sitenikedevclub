let body = document.querySelector("body")
let tenis = document.querySelector(".tenis-nike1")

function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")
    body.style.background = cor
    
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito") 
    }, 500);
}