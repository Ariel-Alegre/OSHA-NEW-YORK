const { Employee } = require("../../models");
const cloudinary = require('cloudinary').v2;

module.exports = {
  updateEmployee: async (req, res) => {
    const {
      name,
      idSST,
      eyeColor,
      height,
      issued,
      expires,
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
    } = req.body;

    const { id } = req.params;  // Assuming the employee ID is passed as a URL parameter

    try {
      const updateData = {
        name,
        idSST,
        eyeColor,
        height,
        issued,
        expires,
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
      };

      // Updating only images if they are present in the request
      if (req.files) {
        if (req.files['avatarValue']) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['avatarValue'][0].path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          updateData.urlFile = cloudinaryUploadResult.secure_url;
        }

        if (req.files['test1']) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test1'][0].path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          updateData.test = cloudinaryUploadResult.secure_url;
        }

        if (req.files['test2']) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test2'][0].path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          updateData.test2 = cloudinaryUploadResult.secure_url;
        }

        if (req.files['test3']) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test3'][0].path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          updateData.test3 = cloudinaryUploadResult.secure_url;
        }

        if (req.files['test4']) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test4'][0].path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          updateData.test4 = cloudinaryUploadResult.secure_url;
        }
      }

      const [updated] = await Employee.update(updateData, {
        where: {
          idSST: id
      }
      });

      if (updated) {
        const updatedEmployee = await Employee.findOne({ where: { id } });
        res.status(200).send(updatedEmployee);
      } else {
        res.status(404).send({ message: 'Error al actualizar' });
      }
    } catch (error) {
      console.error("controllers/employee/updateEmployee", error);
      res.status(500).send(error);
    }
  }
};
