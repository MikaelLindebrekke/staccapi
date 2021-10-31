'use strict'

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('search-button')[0].addEventListener('click', searchClicked)
}

function searchClicked() {
    var searchName = document.getElementById('search-name').value
    let resultsDiv = document.getElementById("results")
    console.log(searchName)
    fetch('http://localhost:3000/?name=' + searchName)
    .then(res => res.json())
    .then(person =>
        resultsDiv.innerHTML += `<p> ${person.name} test </p>`)
}
