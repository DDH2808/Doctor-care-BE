import clinicService from "../services/clinicService";

const createClinic = async (req, res) => {
  try {
    let infor = await clinicService.createClinicService(req.body);
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server...",
    });
  }
};

const getAllClinic = async (req, res) => {
  try {
    let infor = await clinicService.getAllClinicService();
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from server...",
    });
  }
};

const getDetailClinicById = async (req, res) => {
  try {
    let infor = await clinicService.getDetailClinicByIdService(req.query.id);
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
  createClinic: createClinic,
  getAllClinic: getAllClinic,
  getDetailClinicById: getDetailClinicById,
};
