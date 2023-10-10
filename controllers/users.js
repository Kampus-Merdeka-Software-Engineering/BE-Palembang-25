import express from "express";
import { createUser, findUserById } from "../services/users.js";
import { httpStatusMesage } from "../constants/httpStatusMessage.js";

export const postCreateUser = async (request, response) => {
  const { userName, password, email, beratBadan, tinggiBadan, jenisKelamin } = request.body;
  const user = await createBook(userName, password, email, beratBadan, tinggiBadan, jenisKelamin);

  console.log({ body: request.body });
  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};

export const getUserById = async (request, response) => {
  const { id } = request.params;
  const user = await findUserById(id);

  response.json({
    data: user,
    message: httpStatusMesage[response.statusCode],
  });
};