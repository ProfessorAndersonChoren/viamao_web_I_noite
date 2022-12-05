let inputYear = document.getElementById("inputYear")
let feedback = document.getElementById("feedback")
let withMajor = document.getElementById("withMajor")

document.getElementById("btnVerify").addEventListener("click", () => {
    let inputValue = inputYear.value
    let year = new Date().getFullYear()
    let minYear = year - 100

    if (inputValue == "") {
        inputYear.classList.add("is-invalid")
        feedback.innerText = "O campo não pode ficar em branco"
    } else if (parseInt(inputValue) < minYear) {
        inputYear.classList.add("is-invalid")
        feedback.innerText = `O ano informado é inferior ao ano ${minYear}`
    } else if (parseInt(inputValue) > year) {
        inputYear.classList.add("is-invalid")
        feedback.innerText = "O ano informado é superior ao ano atual"
    } else {
        inputYear.classList.remove("is-invalid")
        inputYear.classList.add("is-valid")

        let age = year - parseInt(inputValue)
        verifyAccess(age)
    }
})

function verifyAccess(age) {
    if (age >= 18) {
        alert("Seja bem-vindo ao nosso sistema!!!")
    } else if (withMajor.checked && age >= 16) {
        alert("Sejam bem-vindos ao nosso sistema!!!")
    }
    else {
        alert("Lamento, sua entrada não foi permitida!!!")
    }
}