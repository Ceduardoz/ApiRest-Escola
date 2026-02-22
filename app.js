import express from "express";
import { resolve } from "path";

import './src/database/index.js'; // se estiver no mesmo nível de src

import homeRouter from "./src/routes/homeRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import alunoRouter from "./src/routes/alunoRoutes.js";
import photoRouter from "./src/routes/photoRoutes.js";
import tokenRouter from "./src/routes/tokenRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRouter);
    this.app.use("/users", userRouter);
    this.app.use("/token", tokenRouter);
    this.app.use("/alunos", alunoRouter);
    this.app.use("/fotos", photoRouter);
  }
}

export default new App().app;
