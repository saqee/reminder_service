const sender = require("../config/emailConfig")
const sendBasicEmail = async (from, to, subject, mailbody) => {
  const resposne = await sender.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: mailbody,
  })
  return resposne
}

module.exports = {
  sendBasicEmail,
}
