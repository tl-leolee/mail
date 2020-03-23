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
  var to      = req.body.email,
      subject = req.body.subject, 
      html    = req.body.message
  try {
    var status = await send({
        to,
        subject,
        html
    });
    if (status instanceof Error) throw status 
    res.render('result', { err: null });
  } catch(err) {
    res.render('result', { err });
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})