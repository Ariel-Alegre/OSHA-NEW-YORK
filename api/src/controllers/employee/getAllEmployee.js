const { Employee } =  require("../../models")




module.exports = {
    allEmployee: async (req, res) => {
        try {
           const allEmployee = await Employee.findAll()
           res.status(200).send(allEmployee)

        } catch (error) {
            console.log("controllers/employee/getDetailsEmployee.js", error),
                res.send({
                    message: "Error: controllers/employee/getDetailsEmployee.js"
                })
        }
    }

}