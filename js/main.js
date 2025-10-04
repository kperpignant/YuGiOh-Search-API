//url = https://db.ygoprodeck.com/api/v7/cardinfo.php
//have to do data[0]
//data[0].humanReadableCardType


document.querySelector('button').addEventListener('click',getCard);

function getCard() {
    
    let search = document.querySelector('#wildCard').value;
    let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${search}`;
    //let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
    fetch(url) //fetch at this url
        .then(response => response.json()) //then get the response data
        .then(fetched => { //renamed to fetched because the actual data array is called 'data' smh
            console.table(fetched)
            document.querySelector('#cardName').innerText = fetched.data[0].name;
            document.querySelector('#cardRace').innerText = fetched.data[0].race;
            document.querySelector('#cardAttribute').innerText = fetched.data[0].attribute;
            document.querySelector('#cardLevel').innerText = fetched.data[0].level;
            document.querySelector('#cardType').innerText = fetched.data[0].type;
            document.querySelector('#cardDesc').innerText = fetched.data[0].desc;
        }) //then start using the data
        .catch(error => console.error(error)); //catch errors instead of crashing or something
}
