import { where } from "sequelize";
import db from "../models/index";
import { raw } from "body-parser";

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
      if (
        !inputData.id ||
        !inputData.contentHTML ||
        !inputData.contentMarkdown
      ) {
        reject({
          errCode: 1,
          errMessage: "Missing required parameters",
        });
      } else {
        await db.Markdown.create({
          contentHTML: inputData.contentHTML,
          contentMarkdown: inputData.contentMarkdown,
          description: inputData.description,
          doctorId: inputData.id,
        });
        resolve({
          errCode: 0,
          errMessage: "Save detail infor doctor success!",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailDoctorByIdService = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!inputId) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let data = await db.User.findOne({
          where: {
            id: inputId,
          },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.Allcode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({
          errCode: 0,
          errMessage: "Add info doctor successfully!",
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getTopDoctorHomeService: getTopDoctorHomeService,
  getAllDoctorsService: getAllDoctorsService,
  saveDetailInforDoctor: saveDetailInforDoctor,
  getDetailDoctorByIdService: getDetailDoctorByIdService,
};
