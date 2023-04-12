require('dotenv').config()

module.exports ={
  development: {
 username: "root",
    database: "railway",
    password: "uuyxtE4Tk3LZQOsVf5Qg",
    host: "containers-us-west-145.railway.app",
    port: "7798",
    dialect: "mysql" 
  },
   test: {
    username: "root",
    database: "railway",
    password: "uuyxtE4Tk3LZQOsVf5Qg",
    host: "containers-us-west-145.railway.app",
    port: "7798",
    dialect: "mysql"
  },
  production: {
    username: "root",
    database: "railway",
    password: "uuyxtE4Tk3LZQOsVf5Qg",
    host: "containers-us-west-145.railway.app",
    port: "7798",
    dialect: "mysql"

  } 
}
