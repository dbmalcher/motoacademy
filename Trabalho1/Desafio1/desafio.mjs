document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton')
    const userInput = document.getElementById('userCep').value
    const result = document.getElementById('result')

    searchButton.addEventListener('click',() => {
        event.preventDefault()
        
        //função de tratamento do cep vem aqui
        const isCepValid = checkCEP(userInput);
        
        if(isCepValid){
            const url = "https://viacep.com.br/ws/" + userInput + "/json/"
    
            getData(url, result);
        } else {
            console.log("cep errado")
        }
    })
})

async function getData(url, result) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

      result.innerHTML = `
            <h2>Resultado</h2>
            <p>Bairro: ${json.bairro}</p>
            <p>Complemento: ${json.complemento}</p>
            <p>DDD: ${json.ddd}</p>
            <p>Localidade: ${json.localidade}</p>
            <p>Logradouro: ${json.logradouro}</p>
        `
      
    } catch (error) {
      console.error(error.message);
    }
}

function checkCEP(cep){
    if(cep.length != 11){
        return false
    }
    return isNaN(cep)
}
  