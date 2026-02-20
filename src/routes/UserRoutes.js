import { Router } from "express";

import UserController from "../controllers/UserController";
import loginRequired from "../middleware/loginRequired";

const router = new Router();

// Não deve existir (está apenas para testar no insomnia)
// router.get("/", UserController.index); -> listar todos os usuários
// router.get("/:id", UserController.show); -> listar usuário

router.post("/", UserController.store);
router.put("/", loginRequired ,UserController.update);
router.delete("/", loginRequired ,UserController.delete);

export default router;

/*
  index -> lista todos os usuarios -> GET
  store/create -> cria novo usuario -> POST
  clear -> apaga um usuário -> DELETE
  show -> mostra um usuário -> GET
  update ->  atualiza um usuário -> PATCH ou PUT
*/
