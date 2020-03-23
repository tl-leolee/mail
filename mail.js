var sendmail = require('sendmail')()

var defaultOpt = { 
  from:'no-reply@leoleesite.com', 
  to:'tl.leolee@outlook.com', 
  subject:'sendmail test email', 
  html:'<html><p>Hello world.</p></html>' 
}

module.exports = async function send(options=defaultOpt) {
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