/* Selecionando elementos a serem manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const msgStatus = formulario.querySelector("#status");
const botaoBuscar = formulario.querySelector("#buscar");

/* Monitorando o evento de acionamento do botão localizar cep */
botaoBuscar.addEventListener("click", async function(event){
    event.preventDefault();

    // Pegar o cep digitado
    let cep = campoCep.value;

    /* "AJAX": técnica de comunicação assíncrona
    usando a API (Web Service) ViaCEP
    www.viacep.com.br */

    /* Etapa 1: preparar uma URL contendo o cep
    digitado e o caminho da API (ViaCEP) */
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    /* Etapa 2: acesse e inicie uma comunicação/requisição
    com o servidor da URL indicada */
    const resposta = await fetch(url);

    /* Etapa 3: ... e então, recupere a resposta do servidor
    no formato de objeto (JSON). Este objeto contem todas
    as informações do endereço referente ao CEP informado. */
    const dados = await resposta.json();
    
    /* Etapa 4: ... e então, extraia os dados da resposta
    e mostre na tela */
    
        console.log(dados);

        // Se existir o indicador "erro" no objeto dados
        if( "erro" in dados ){
            // Apresentamos a mensagem abaixo
            console.log("Não encontrado!");
            msgStatus.innerHTML = "não encontrado!";
            msgStatus.style.color = "red";
        } else {
            // Senão, o cep existe então mostramos:
            msgStatus.innerHTML = "encontrado!";
            msgStatus.style.color = "blue";

            campoEndereco.value = dados.logradouro;
            campoBairro.value = dados.bairro;
            campoCidade.value = dados.localidade;
            campoEstado.value = dados.uf;
        }

    
});
