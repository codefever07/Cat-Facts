// code-written by Nikhil Malhotra---.Codefevre07

let xhr = new XMLHttpRequest


let nextBtn = document.getElementById('next-btn')

let paraTxt = document.getElementById('fact-para')

nextBtn.addEventListener('click', newJokes)

xhr.open('GET', 'https://catfact.ninja/fact', true)

function newJokes() {
    xhr.open('GET', 'https://catfact.ninja/fact', true)

    xhr.onprogress = function () {
        paraTxt.innerText = "Loading......"
    }



    xhr.onload = function () {

        if (xhr.status === 200) {
            jsontxt = xhr.responseText
            javaScriptObj = JSON.parse(this.responseText)
            paraTxt.innerText = javaScriptObj.fact
        }
    }

    xhr.send()




}

//

newJokes()

