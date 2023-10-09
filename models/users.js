import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    beratBadan: DataTypes.DECIMAL,
    tinggiBadan: DataTypes.DECIMAL,
    jenisKelamin: DataTypes.ENUM('Laki-Laki', 'Perempuan'),
});

export default Users;