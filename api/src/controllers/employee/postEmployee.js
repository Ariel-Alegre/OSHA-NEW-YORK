const { Employee } = require("../../models");
const cloudinary = require('cloudinary').v2;

module.exports = {
  employee: async (req, res) => {
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

    let avatarValue = '';
    let test1Img = '';
    let test2Img = '';
    let test3Img = '';
    let test4Img = '';

    try {
      if (req.files['avatarValue']) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['avatarValue'][0].path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        avatarValue = cloudinaryUploadResult.secure_url;
      }

      if (req.files['test1']) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test1'][0].path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        test1Img = cloudinaryUploadResult.secure_url;
      }

      if (req.files['test2']) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test2'][0].path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        test2Img = cloudinaryUploadResult.secure_url;
      }

      if (req.files['test3']) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test3'][0].path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        test3Img = cloudinaryUploadResult.secure_url;
      }

      if (req.files['test4']) {
        const cloudinaryUploadResult = await cloudinary.uploader.upload(req.files['test4'][0].path, {
          resource_type: 'image',
          quality: 'auto:low',
          fetch_format: 'auto',
        });
        test4Img = cloudinaryUploadResult.secure_url;
      }

      const employee = await Employee.create({
        name,
        urlFile: avatarValue,
        idSST,
        eyeColor,
        height,
        issued,
        expires,
        test: test1Img,
        test2: test2Img,
        test3: test3Img,
        test4: test4Img,
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
      });

      res.status(200).send(employee);
    } catch (error) {
      console.error("controllers/employee/postEmployee", error);
      res.status(404).send(error);
    }
  }
};
