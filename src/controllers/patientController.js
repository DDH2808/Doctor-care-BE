import patientService from "../services/patientService";

const postBookAppointment = async (req, res) => {
  try {
    let infor = await patientService.postBookAppointmentService(req.body);
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
  postBookAppointment: postBookAppointment,
};
