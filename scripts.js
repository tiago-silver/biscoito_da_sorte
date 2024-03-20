const frasesMotivacionais = [
    "Grandes conquistas começam com pequenos passos. Continue seguindo em frente!",
    "Acredite no poder dos seus sonhos. Eles são o combustível para o seu sucesso.",
    "Seja gentil consigo mesmo. O autocuidado é a chave para a felicidade.",
    "Você é mais forte do que imagina. Supere seus limites e alcance o impossível!",
    "A jornada da vida é cheia de altos e baixos. Mantenha-se firme durante as tempestades!",
    "A persistência é a chave para o sucesso. Continue tentando e você alcançará seus objetivos.",
    "Cada desafio é uma oportunidade de crescimento. Abra-se para novas possibilidades!",
    "A gratidão transforma o comum em extraordinário. Agradeça pelas pequenas coisas na vida.",
    "Seja corajoso o suficiente para seguir o seu coração. Ele sabe o caminho certo.",
    "Confie no processo da vida. Tudo acontece no momento certo e da maneira certa.",
    "O otimismo é a luz que guia o seu caminho, mesmo nos momentos mais sombrios.",
    "Cultive a paciência. Grandes coisas levam tempo para se concretizarem.",
    "Alegre-se com o progresso, não importa quão pequeno seja. Cada passo conta!",
    "A beleza da vida está nas suas imperfeições. Aceite-se e celebre sua singularidade.",
    "O universo conspira a seu favor. Confie na magia que está por vir."
];

const screen1 = document.querySelector(".screen1")
const screen1Button = screen1.querySelector("#closedBiscuit")
const screen2 = document.querySelector(".screen2")
const screen2Button = screen2.querySelector("button")

let phrase = screen2.querySelector("p")




function watchScreens(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function openBiscuit(){
    watchScreens()
    let ramdomNumber = Math.floor(Math.random() * 14)
    phrase.innerText = frasesMotivacionais[ramdomNumber]
}

function closeBiscuit(){
    watchScreens()
}

screen1Button.addEventListener("click", openBiscuit)
screen2Button.addEventListener("click", closeBiscuit)

