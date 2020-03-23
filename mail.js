var sendmail = require('sendmail')()

module.exports = async function send({
  from='no-reply@leoleesite.com', 
  to='tl.leolee@gmail.com', 
  subject='MailComposer sendmail', 
  html='<html><p>Mail of test sendmail</p></html>' 
}) {
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