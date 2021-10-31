const csv = require('csv-parser')
const fs = require('fs')
const { resolve } = require('path')

async function getPerson(name) {
    const list = await readCSV()
    for (var person of list) {
        if(aContainsB(person.name.toLowerCase(), name.toLowerCase())) {
            return person
        } 
    }
    return null
}

function readCSV() {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('./pep.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results)
            })
        })
}

function aContainsB (a, b) {
    return a.indexOf(b) >= 0;
}

exports.getPerson = getPerson