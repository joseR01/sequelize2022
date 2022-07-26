require('dotenv').config()

module.exports = {
  
  //configuracion de db
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "sequelizejwt",
    host: process.env.DB_HOST ||  "localhost",
    dialect: process.env.DB_DIALECT ||  "mysql",

  // Configurar Seeds
    seederStorage: "sequelize",
    seederStorageTableName: "seeds",

  // Configuracion de Migrations
    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations"

}
