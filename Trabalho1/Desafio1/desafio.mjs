document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton')
    const userInput = document.getElementById('userCep').value

    searchButton.addEventListener('click',() => {
        event.preventDefault()
        
        //função de tratamento do cep vem aqui
        
        const url = "viacep.com.br/ws/" + userInput + "/json/"

        const requestCep = new XMLHttpRequest();
        requestCep.open('GET', url ,true);
        requestCep.send();
        //return cep;
    })
})