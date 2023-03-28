const { Employee, Avatars } = require("../../models")





module.exports = {
    employee: async (req, res) => {
        const {
            name,
            urlFile ,
              idSST, 
              eyeColor,
               height, 
               issued, 
               expires, 
               test,
               test2,
               test3,
                certification,
                ctf2,
                ctf3,
                 issuedBy,
                 iBy2,
                 iBy3,
                  verifiedBy,
                  vrf2,
                  vrf3,
                  issuedOn,
                  iuOn2,
                  iuOn3,
                  } = req.body
                  
       
        try {
            
  
    const employee = await Employee.create({
        name,
        urlFile,
        idSST,
        eyeColor,
        height,
        issued,
        expires,
        test,
        test2,
        test3,
        ctf3,
        certification,
        ctf2,
        ctf3, 
        issuedBy,
        iBy2,
        iBy3,
        verifiedBy,
        vrf2,
        vrf3,
        issuedOn,
        iuOn2,
        iuOn3,

        
    })



    res.status(200).send(employee)
    
   } catch (error) {
    console.log("controllers/employee/postEmployeee", error);
    res.status(404).send(error)

   }
    }

}