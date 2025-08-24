const express = require("express")
const { PORT, DB_SYNC } = require("./config/serverConfig")
const app = express()
const TicketController = require("./controllers/ticket-controller")
const jobs = require("./utils/job")
//const db = require("./models/index") // Assuming you have a database config file
function startServer() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  //app.use("/api", require("./routes/index")) // Use the routes defined in index.js
  app.post("/api/v1/ticket", TicketController.create)
  app.get("/api/v1/ticket", TicketController.get)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    /* if (DB_SYNC) {
      // db.sequelize.sync({ alter: true })
    } */
    /* sendBasicEmail(
      "thesis09126@gmail.com",
      "saqeeb108@gmail.com",
      "this is testing email",
      "hey im ztm"
    )*/
    //jobs()
  })
}

startServer()
