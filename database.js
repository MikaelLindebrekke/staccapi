const csv = require('csv-parser')
const fs = require('fs')
const { resolve } = require('path')

//Search function that reads through the list returend by the CSV parser and returns hit if name is present. 
async function getPerson(name) {
    const list = await readCSV()
    for (var person of list) {
        if(person.name.toLowerCase() == name.toLowerCase()) {
            return person
        } 
    }
    return null
}

//CSV parser
function readCSV() {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('./pep_small.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results)
            })
        })
}

exports.getPerson = getPerson