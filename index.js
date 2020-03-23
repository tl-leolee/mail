var express = require('express');

var app = express();

var send = require('./mail')


const PORT = process.env.PORT || 3000

app.get('/send', async (req, res) => {
  await send({
    to: 'tl.leolee@outlook.com',
    html:'Hello Leo. This is a message from mail composer. Please reach out to me at 881773211. Thanks. Leo'
  });
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})