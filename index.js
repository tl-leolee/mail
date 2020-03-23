var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var send = require('./mail')

const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/send', async (req, res) => {
  try {
    var status = await send({
        to: req.body.email,
        subject: req.body.subject,
        html: req.body.message
    });

    if (status instanceof Error) throw status 

    res.render('success');
  } catch(e) {
    console.log(e)
    res.sendStatus(500);
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})