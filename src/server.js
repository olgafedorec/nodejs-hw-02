import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './utils/env.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import logger from './middlewares/logger.js';
import contactsRouter from './routers/contacts.js';
import authRouter from './routers/auth.js';

// require('dotenv').config();

export const startServer = () => {
 
  const app = express();

  app.use(logger);
  app.use(cors({origin: "*"}));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static("uploads"));

  // app.get("/", (req, res) => {
  //   res.send("Welcome to the API. Use Postman to interact with the endpoints.");
  // });
  
  app.use("/auth", authRouter);
  app.use("/contacts", contactsRouter);
  
  app.use(notFoundHandler);

  app.use(errorHandler);

  const port = Number(env("PORT", 3000));

  app.listen(port, () => console.log("server running on port 3000"));
};
