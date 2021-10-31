'use strict'

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    document.getElementsByClassName('search-button')[0].addEventListener('click', searchClicked)
}

function searchClicked(e) {
    e.preventDefault()
    var searchName = document.getElementById('search-name').value
    let resultsDiv = document.getElementById("results")

    fetch('http://localhost:3000/search/?name=' + searchName)
    .then(res => res.json())
    .then(person =>
        resultsDiv.innerHTML += `<p> ${person.name} </p>`)
}
