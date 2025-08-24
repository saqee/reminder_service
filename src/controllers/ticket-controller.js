const TicketService = require("../services/email-service")

const create = async (req, res) => {
  const response = await TicketService.createTicket(req.body)
  res.status(201).json({
    success: true,
    data: response,
    mesage: "create successfully ticket",
  })
}

const get = async (req, res) => {
  const response = await TicketService.getAll()
  res.status(201).json({
    success: true,
    data: response,
    mesage: "create successfully ticket",
  })
}

module.exports = {
  create,
  get,
}
