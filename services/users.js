import Users from "../models/users.js";

export const findUserById = async (id) => {
  return await Users.findOne({ where: { id } });
};

export const createUser = async (userName, password, email, beratBadan, tinggiBadan, jenisKelamin) => {
  return await Users.create({ userName, password, email, beratBadan, tinggiBadan, jenisKelamin });
};