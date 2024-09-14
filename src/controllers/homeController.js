import db from "../models/index";
import user from "../models/user";
import CRUDService from "../services/CRUDService";

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

const getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

const getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

const postCRUD = async (req, res) => {
  const message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Post CRUD from server");
};

const displayGetCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser();
  console.log("===============");
  console.log(data);
  console.log("===============");
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
