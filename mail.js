const CONFIG = {
  smtpHost: 'leoltl-mail-test.herokuapp.com',
  smtpPort: '25'
}
var sendmail = require('sendmail')(CONFIG)
module.exports = async function send({
  from='no-reply@leolee.site', 
  subject='MailComposer sendmail', 
  html='<html><p>Mail of test sendmail</p></html>',
  to
}) {
  if (!to) throw Error('Recipient is required.')
  return new Promise((resolve, reject) => {
      sendmail({
      from,
      to,
      subject,
      html,
    }, function (err, reply) {
      if (err) {
        console.log(err && err.stack)
        reject(err)
      }
      console.dir(reply)
      resolve(reply)
    })
  })
}