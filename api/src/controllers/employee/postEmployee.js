const { Employee, Avatars } = require("../../models")





module.exports = {
    employee: async (req, res) => {
        const {
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
            test4,

            certification,
            ctf2,
            ctf3,
            ctf4,

            issuedBy,
            iBy2,
            iBy3,
            iBy4,

            verifiedBy,
            vrf2,
            vrf3,
            vrf4,

            issuedOn,
            iuOn2,
            iuOn3,
            iuOn4,

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
                test4,
                certification,
                ctf2,
                ctf3,
                ctf4,

                issuedBy,
                iBy2,
                iBy3,
                iBy4,

                verifiedBy,
                vrf2,
                vrf3,
                vrf4,

                issuedOn,
                iuOn2,
                iuOn3,
                iuOn4,



            })



            res.status(200).send(employee)

        } catch (error) {
            console.log("controllers/employee/postEmployeee", error);
            res.status(404).send(error)

        }
    }

}