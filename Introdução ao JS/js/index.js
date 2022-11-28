// Comandos de impressão ou de saída
// 1° Utilizando o objeto console
// console.log("Hello World!!!")
// console.debug("Para imprimir informações de 'Depuração'")
// console.info("Para imprimir informações simples")
// console.warn("Um advertência, algo a se considerar!!!")
// console.error("Um problema muito grave!!!")

// 2° Utilizando as propriedades innerText e a innerHTML
// document.body.innerText = "<p>Um parágrafo inserido via JS</p>"
// document.body.innerHTML = "<p>Um parágrafo inserido via JS</p>"

// 3° Utilizar a função Alert
// alert("Uma mensagem que salta na cara do usuário")

// -------------- Seletores --------------------------
let paragraph = document.getElementById("meuParagrafo")
// console.log(paragraph)

paragraph.classList.add("text-primary", "text-center", "fw-bold")
paragraph.innerHTML = "Agora está escrito outra coisa"

// -------------- Eventos --------------------------
let image = document.createElement("img")
image.src = "../img/gurias.jpg"
image.width = 300

document.body.appendChild(image)

image.addEventListener("click", () => {
    image.src = "../img/gato.jpg"
})