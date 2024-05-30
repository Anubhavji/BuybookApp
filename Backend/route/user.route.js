import express from "express";
import { login, signup } from "../controller/user.controller.js";

const Userroute = express.Router();

Userroute.post("/signup", signup);
Userroute.post("/login", login);

export default Userroute;
