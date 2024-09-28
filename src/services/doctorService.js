import { where } from "sequelize";
import db from "../models/index";

const getTopDoctorHomeService = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
        nest: true,
        where: { roleId: "R2" },
        attributes: { exclude: ["password"] },
        limit: limitInput,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
      });
      resolve({
        errCode: 0,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllDoctorsService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: { roleId: "R2" },
        attributes: { exclude: ["password", "image"] },
      });
      resolve({
        errCode: 0,
        data: doctors,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const saveDetailInforDoctor = (inputData) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("input data: ",inputData)
      if(!inputData.doctorId || !inputData.contentHTML || !inputData.contentMarkdown) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters 123",
        })
      } else {
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          doctorId: inputData.doctorId
        }
      )
        resolve({
          errCode: 0,
          errMessage: "Save detail infor doctor success!"
        })
      }
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = {
  getTopDoctorHomeService: getTopDoctorHomeService,
  getAllDoctorsService: getAllDoctorsService,
  saveDetailInforDoctor: saveDetailInforDoctor,
};
