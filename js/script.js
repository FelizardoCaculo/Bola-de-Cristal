alert(`Olá seja bem vindo a Bola de cristal que vai revelar seu destino\n
Para fazer novas perguntas actualize a janela do navegador.`)

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Voce pode contar com isso.",
    "Melhor não dizer nada agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim."
];

const resposta = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#inputPergunta');
const buttonPerguntar = document.querySelector('#buttonPerguntar');

//clicar para fazer pergunta
function fazerPergunta() {
    if(inputPergunta.value == ""){
        alert('Por favor, escreva primeiro sua pergunta antes de clicar em "Fazer Pergunta"');
        return;
    }

    buttonPerguntar.setAttribute("disabled", true);

const pergunta = "<div>" + inputPergunta.value + "</div>";

    //Gerar resposta aleatória
    const totalRespostas = respostas.length - 1;
    const respostaAleatoria = Math.floor(Math.random() * totalRespostas);
    resposta.innerHTML = pergunta + respostas[respostaAleatoria];

    //Sumir a resposta depois de 5 segundos
    setTimeout(function() {
        resposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled");
    }, 5000)

}