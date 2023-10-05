const botao = document.querySelector("nav h2");
const linksMenu = document.querySelector(".menu");
const icone = botao.querySelector("a");

botao.addEventListener("click", function(event){
    event.preventDefault();
    linksMenu.classList.toggle("aberto");

    /* Se a classe "aberto" estiver aplicada 
    ao linksMenu, mude o texto/ícone para "Fechar &times;".
    Caso contrário, mostre o texto/ícone "Menu &equiv;" */
    if(linksMenu.classList.contains("aberto")){
        icone.innerHTML = "Fechar &times;";
    } else {
        icone.innerHTML = "Menu &equiv;";
    }
});