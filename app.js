const db = require('./database')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.static('public'))

// GET functionality for searching through the database with name of person.
app.get('/search', async function (req, res, next) {
  var name = req.query.name
  if (!name) {
    res.status(400)
    res.send("No name query found!")
  } else {

    var person = await db.getPerson(name)
    if (!person) {
      res.status(404)
      res.send("Person with name " + name + " not found.")
    } else {
      res.send(person);
      console.log(person)
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})