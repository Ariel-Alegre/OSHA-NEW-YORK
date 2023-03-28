const { Employee} = require("../../models")




module.exports = {
    oneEmployee: async (req, res) => {
        const { idSST } = req.params
        try {
            const detailEmploye = await Employee.findOne({
                where: {
                    idSST: idSST
                }
            })


            if (detailEmploye) {
                res.status(200).send(detailEmploye)

            } else {
                res.status(404).send({
                    message: "El empleado no existe"
                })
            }

        } catch (error) {
            console.log("controllers/employee/getDetailsEmployee.js", error),
                res.send({
                    message: "Error: controllers/employee/getDetailsEmployee.js"
                })
        }
    }

}