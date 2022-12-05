document.getElementById("btnForce").addEventListener("click", () => {
    let inputMass = document.getElementById("mass")
    let inputGravity = document.getElementById("gravity")
    let mass = parseFloat(inputMass.value)
    let gravity = parseFloat(inputGravity.value)

    let force = Math.floor(mass * gravity)

    alert(`A força é ${force}`)
})

document.getElementById("calcMRU").addEventListener("click", () => {
    let initialPosition = document.getElementById("initialPosition").value
    let speed = document.getElementById("speed").value
    let initialTime = document.getElementById("initialTime").value
    let endTime = document.getElementById("endTime").value

    let endPosition = parseInt(initialPosition) + parseInt(speed) * (parseInt(endTime) - parseInt(initialTime))

    alert(`A posição final é ${endPosition}`)
})