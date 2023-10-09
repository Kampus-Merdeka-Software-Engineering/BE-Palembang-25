import express, { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/sequelize.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const project = express();
const port = 2023;
const router = Router();

project.use(bodyParser.urlencoded());
project.use(bodyParser.raw());
project.use(bodyParser.json());

router.use("/api/users", usersRouter);
project.use(router);

startSequelize(sequelize);

project.listen(port, () => {
    console.log('Aplikasi FIT FOR LIFE sedang berjalan di port ${port}');
});
