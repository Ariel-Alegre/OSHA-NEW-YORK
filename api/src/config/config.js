require('dotenv').config()

module.exports ={
  development: {
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE  ,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
  },
  test: {
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE  ,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
  },
  production: {
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE  ,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"

  }
}
