var sendmail = require('sendmail')()

module.exports = async function send({
  from='no-reply@leoleesite.com', 
  to='tl.leolee@gmail.com', 
  subject='MailComposer sendmail', 
  html='<html><p>Mail of test sendmail</p></html>' 
}) {
  sendmail({
    from,
    to,
    subject,
    html,
  }, function (err, reply) {
    console.log(err && err.stack)
    console.dir(reply)
  })
}