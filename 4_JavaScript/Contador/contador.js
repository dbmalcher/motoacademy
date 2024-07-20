document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('counter')
    const clickButton = document.getElementById('clickButton')

    let contador = 0
    clickButton.addEventListener('click', () => {
        contador++
        countElement.textContent = contador 
    })
})