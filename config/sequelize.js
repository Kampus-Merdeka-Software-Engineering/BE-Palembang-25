import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize('mysql://root:PQftnWPA5fkv8NoCJXZr@containers-us-west-90.railway.app:6960/railway');

export default sequelize;

sequelize.js