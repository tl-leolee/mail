var express = require('express');

var app = express();

var send = require('./mail')


const PORT = process.env.PORT || 3000

app.get('/send', async (req, res) => {
  await send();
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})