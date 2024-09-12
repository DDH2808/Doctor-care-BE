import express from "express";
import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get('/about', homeController.getAboutPage);

  router.get("/abc", (req, res) => {
    return res.send("Hello world");
  });

  return app.use("/", router);
};

export default initWebRoutes;
