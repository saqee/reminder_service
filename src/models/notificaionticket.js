"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class NotificaionTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificaionTicket.init(
    {
      subject: DataTypes.STRING,
      content: DataTypes.STRING,
      recepientEmail: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["PENDING", "SUCCESS", "FAILED"],
        defaultValue: "PENDING",
      },
      notification: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "NotificaionTicket",
    }
  )
  return NotificaionTicket
}
