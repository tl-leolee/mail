var sendmail = require('sendmail')()

var defaultOpt = { 
  from:'no-reply@leoleesite.com', 
  to:'tl.leolee@gmail.com', 
  subject:'MailComposer sendmail', 
  html:'<html><p>Mail of test sendmail</p></html>' 
}

module.exports = async function send(options=defaultOpt) {
  sendmail({
    from:options.from,
    to:options.to,
    subject:options.subject,
    html:options.html,
  }, function (err, reply) {
    console.log(err && err.stack)
    console.dir(reply)
  })
}