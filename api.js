// GET BUTTOM FOR CALLBACK FUNCTION

document.getElementById("getBit").addEventListener("click", getBits);

// WILL FETCH FILE AND STORE DATA
// function getText() {
//     fetch('simple.txt')
//     .then(function(respone) {
//         return respone.text();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

// WILL FETCH FILE AND STORE DATA

function getBits() {
    fetch('https://min-api.cryptocompare.com/data/top/exchanges?fsym=BTC&tsym=USD')
    .then((response) => response.json())
    .then(function(response) {
        return response;
    })
    .then(function(data) {
        let output = "";
        let Data =  data.Data;
        for(i = 0; i < Data.length; i++) {
            output += 
            `
            <div>
                <ul>
                    <li>ID: ${Data[i].exchange}</li>
                    <li>Symbol: ${Data[i].fromSymbol}</li>
                    <li>volume: ${Data[i].toSymbol}</li>
                    <li>volume24h: ${Data[i].volume24h}</li>

                </ul>
            </div>
            `
        }
        document.getElementById('output').innerHTML = output;
    })
    
    }
