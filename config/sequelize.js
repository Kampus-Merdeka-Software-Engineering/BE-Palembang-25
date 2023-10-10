import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize('mysql://root:FVpSdnsIUmczafVtJHtc@containers-us-west-88.railway.app:6361/railway');

export default sequelize;

sequelize.js