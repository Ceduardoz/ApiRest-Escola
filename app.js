import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from "express";
import { resolve } from "path";
import cors from "cors";

import homeRouter from "./src/routes/homeRoutes";
import userRouter from "./src/routes/userRoutes";
import tokenRouter from "./src/routes/tokenRoutes";
import alunoRouter from "./src/routes/alunoRoutes";
import photoRouter from "./src/routes/photoRoutes";
class App {
  constructor(){
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware(){
    this.app.use(cors());

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/uploads', express.static(resolve(__dirname, 'uploads')));
  }

  routes(){
    this.app.use("/", homeRouter);
    this.app.use("/users/", userRouter);
    this.app.use("/token/", tokenRouter);
    this.app.use("/alunos/", alunoRouter);
    this.app.use("/fotos/", photoRouter);
  }
}

export default new App().app;
