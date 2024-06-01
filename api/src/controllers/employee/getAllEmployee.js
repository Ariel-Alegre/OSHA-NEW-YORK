const { Employee } =  require("../../models")




module.exports = {
    allEmployee: async (req, res) => {
        try {
           const allEmployee = await Employee.findAll()
           if (!allEmployee) {
            console.log("no hay empleados")
            res.statue(404).send({message: "no hay empleados"})
           } else {
            console.log("Todos empleados")

               res.status(200).send(allEmployee)
           }

        } catch (error) {
            console.log("controllers/employee/getDetailsEmployee.js", error),
                res.send({
                    message: "Error: controllers/employee/getDetailsEmployee.js"
                })
        }
    }

}