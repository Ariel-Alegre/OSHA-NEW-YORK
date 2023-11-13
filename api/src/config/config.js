require('dotenv').config()

module.exports = {
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
 /*  development: {
    username: "root",
       database: "employee",
       password: "password",
       host: "localhost",
       port: "3306",
       dialect: "mysql" 
     },
      test: {
        username: "root",
        database: "employee",
        password: "password",
        host: "localhost",
        port: "3306",
        dialect: "mysql"
     },
     production: {
      username: "root",
       database: "employee",
       password: "password",
       host: "localhost",
       port: "3306",
       dialect: "mysql"
   
     }  */
}
