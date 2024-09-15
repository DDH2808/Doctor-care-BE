import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController"

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get('/about', homeController.getAboutPage);
  router.get('/crud', homeController.getCRUD);

  router.post('/post-crud', homeController.postCRUD);
  router.get('/get-crud', homeController.displayGetCRUD);
  router.get('/edit-crud', homeController.getEditCRUD);
  router.post('/put-crud', homeController.putCRUD);
  router.get('/delete-crud', homeController.deleteCRUD);

  router.post('/api/login', userController.handleLoging);
  router.get('/api/get-all-users', userController.handleGetAllUser);
  router.post('/api/create-new-user', userController.handleCreateNewUser);
  router.post('/api/edit-user', userController.handleEditUser);
  router.get('/api/delete-user', userController.handleDeleteUser);

  router.get("/abc", (req, res) => {
    return res.send("Hello world");
  });

  return app.use("/", router);
};

export default initWebRoutes;
