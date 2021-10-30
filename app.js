const db = require('./database')
const express = require('express')
const app = express()
const port = 3000

app.get('/', async function (req, res, next) {
  var name = req.query.name
  if (!name) {
    res.status(400)
    res.send("No name query found!")
  } else {

    var person = await db.getPerson(name)

    res.send(person);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})