var phrasesContainer = document.querySelector(".phrasesContainer");


function getAll() {
    fetch('http://api.techlaunch.io:88/all')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                phrasesContainer.innerHTML +=
                `
        <a href="quote.html?id=${data[i].id}">
            <div class="quoteContainer">
              <p>${data[i].text}</p>
              <p>${data[i].author}</p>
            </div>
        </a>
                `
            }
        })
    }
getAll();
