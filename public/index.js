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

    fetch('/search/?name=' + searchName)
    .then(res => {
        if (!res.ok) {
            if (res.status === 404) {
                resultsDiv.innerHTML = `<p> Person is not politically exposed! </p>`
                return 
            }
            throw new Error('Fetch failed!')
        }
        return res.json()
    })
    .then(person =>
        resultsDiv.innerHTML = `<p> ${person.name} is a politically exposed person </p>`)
    .catch(err => {
        console.err('There was a problem with fetching person', err)
    })
}
