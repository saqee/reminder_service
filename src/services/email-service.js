const sender = require("../config/emailConfig")
const TicketRepository = require("../repository/ticket-repository")
const sendBasicEmail = async (from, to, subject, mailbody) => {
  const resposne = await sender.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: mailbody,
  })
  return resposne
}

const fetchPendingEmails = async () => {
  try {
    const repo = new TicketRepository()
    const response = await repo.get({ status: "PENDING" })

    return response
  } catch (error) {}
}

const updateTicket = async (ticketId, status) => {
  try {
    const repo = new TicketRepository()
    const response = await repo.updateTicket(ticketId, status)

    return response
  } catch (error) {}
}

const getAll = async (timeStamp) => {
  try {
    const repo = new TicketRepository()
    const response = await repo.getAllTicket()
    console.log(response)

    return response
  } catch (error) {}
}

const createTicket = async (data) => {
  try {
    const repo = new TicketRepository()
    const response = await repo.createTicket(data)
    return response
  } catch (error) {}
}

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createTicket,
  getAll,
  updateTicket,
}
