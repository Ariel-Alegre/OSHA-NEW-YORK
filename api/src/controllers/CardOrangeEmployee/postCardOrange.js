const { CardOrange } =require("../../models")

module.exports = {
    CardOrange: async (req, res) => {
        const { name, card, hours, date, amORpm } = req.body
        try {
            const cardOrange = await CardOrange.create({
                name,
                card,
                hours,
                date,
                amORpm
            });
            res.status(200).send(cardOrange)

        } catch (error) {
            console.log("controllers/CardOrangeEmployee/postCardOrange", error);
            res.status(404).send(error)
        }
    }

}