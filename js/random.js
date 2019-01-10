var quoteCont = document.querySelector(".quoteContainer");

function getRandom(){
    fetch('http://api.techlaunch.io:88/random')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        quoteCont.innerHTML =
        `
        <p>${data.text}</p>
        <p>${data.author}</p>
        <p>${data.source}</p>
        `
    })
}

getRandom();