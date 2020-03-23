var express = require('express');

var app = express();
var sendmail = require('sendmail')()

const PORT = process.env.PORT || 3000

app.get('/send', async (req, res) => {

  await sendmail({
    from: 'no-reply@leoleesite.com',
    to: 'gaceb68437@upcmaill.com',
    subject: 'MailComposer sendmail',
    html: 'Mail of test sendmail '
    }, function (err, reply) {
    console.log(err && err.stack)
    console.dir(reply)
  })

  res.sendStatus(200)

})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})