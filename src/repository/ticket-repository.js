const { NotificaionTicket } = require("../models/index")
const { Op } = require("sequelize")
class TicketRepository {
  async getAllTicket() {
    const tickets = await NotificaionTicket.findAll()
    return tickets
  }
  async createTicket(data) {
    const ticket = await NotificaionTicket.create(data)
    return ticket
  }

  async get(filter) {
    try {
      const tickets = await NotificaionTicket.findAll({
        where: {
          status: filter.status,
          notification: {
            [Op.gt]: new Date(),
          },
        },
      })
      return tickets
    } catch (error) {
      throw error
    }
  }

  async updateTicket(ticketId, data) {
    try {
      const ticket = await NotificaionTicket.findByPk(ticketId)
      ticket.status = data.status
      await ticket.save()
      return ticket
    } catch (error) {
      throw error
    }
  }
}

module.exports = TicketRepository
