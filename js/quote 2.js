var quoteCont = document.querySelector(".quoteContainer");

function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];}
        }
        return(false);
    }

function singleQuote(num){
    fetch(`http://api.techlaunch.io:88/${num}`)
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

singleQuote(getQueryVariable("id"));
