import { Router } from "express";
import { getUserById, postCreateUser } from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/:id", getUserById);

usersRouter.post("/", postCreateUser);

export default usersRouter;