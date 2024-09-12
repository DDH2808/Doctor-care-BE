import db from '../models/index';

const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();
    res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

const getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

module.exports = { 
    getHomePage: getHomePage,
    getAboutPage: getAboutPage
};
