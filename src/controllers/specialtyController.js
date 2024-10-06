import specialtyService from "../services/specialtyService";

const createSpecialty = async (req, res) => {
  try {
    let infor = await specialtyService.createSpecialtyService(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server...",
    });
  }
};

module.exports = {
  createSpecialty: createSpecialty,
};
