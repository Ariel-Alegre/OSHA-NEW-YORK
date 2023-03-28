const { CardOrange } = require("../../models")





module.exports = {
    detailCardOrange: async (req, res) => {
        const { card } = req.params
        try {
            const detailCardOrange = await CardOrange.findOne({
                where: {
                    card: card
                }
            })


            if (detailCardOrange) {
                res.status(200).send(detailCardOrange)

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