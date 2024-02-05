require('dotenv').config()

module.exports = {
  development: {
 username: "root",
    database: "railway",
    password: "GcFB6BEcffdFeB6112Ce5F5hA3e5E3AD",
    host: "roundhouse.proxy.rlwy.net",
    port: "22864",
    dialect: "mysql" 
  },
   test: {
    username: "root",
    database: "railway",
    password: "GcFB6BEcffdFeB6112Ce5F5hA3e5E3AD",
    host: "roundhouse.proxy.rlwy.net",
    port: "22864",
    dialect: "mysql" 
  },
  production: {
    username: "root",
    database: "railway",
    password: "GcFB6BEcffdFeB6112Ce5F5hA3e5E3AD",
    host: "roundhouse.proxy.rlwy.net",
    port: "22864",
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
