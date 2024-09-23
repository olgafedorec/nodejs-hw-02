import Joi from "joi";
import { emailRegexp } from "../constants/users.js";

export const userRegisterSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required()
});