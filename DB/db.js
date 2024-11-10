import Sequelize from "sequelize";

const sequelize = new Sequelize("ltwnangcao", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
module.exports = sequelize;
