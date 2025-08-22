const express = require("express")
const { PORT, DB_SYNC } = require("./config/serverConfig")
const app = express()
//const db = require("./models/index") // Assuming you have a database config file
function startServer() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  //app.use("/api", require("./routes/index")) // Use the routes defined in index.js
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    if (DB_SYNC) {
      // db.sequelize.sync({ alter: true })
    }
  })
}

startServer()
