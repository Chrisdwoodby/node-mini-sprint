var db = require('./db')
const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('../react-client/dist'))
app.use(express.json())


app.get('/test/:name', (req, res) => {
  console.log(req.params)
  res.send('hello there');
})


app.get('/quote', (req, res) => {
  db.readAll((err, results) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.status(200);
      res.send(results);
    }
  })
});


app.post('/quote', (req, res) => {
  db.writeOne(req.body, (err, results) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.status(201);
      res.send(results);
    }
  })

})


app.listen(port, () => {
  console.log(`listening on ${port}...`)
});