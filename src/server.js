import express from "express";
import bodyParser from "body-parser"; 
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
// import cors from "cors";

require("dotenv").config(); 

const app = express();
// app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT || 4000; //Port === undefined => Port = 4000

app.listen(port, () => {
  console.log(`Backend Nodejs is running on http://localhost:${port}`);
});
