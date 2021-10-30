const e = require('express');
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res, next) {
  var name = req.query.name
  console.log(name)
  if (!name) {
    res.status(400)
    res.send("No name query found!")
  } else {
    res.send(name);
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})