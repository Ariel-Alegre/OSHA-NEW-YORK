const { CardOrange } = require("../../models")

module.exports = {
   AllCardOrange: async (req, res) => {
     
        try {
            const cardOrange = await CardOrange.findAll();
            res.status(200).send(cardOrange)

        } catch (error) {
            console.log("controllers/CardOrangeEmployee/getallaCardOrange", error);
            res.status(404).send(error)
        }
    }

}