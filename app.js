const db = require('./database')
const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

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
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})