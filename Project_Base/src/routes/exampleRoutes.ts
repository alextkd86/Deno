/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { Router } from "./../../dependences.ts";

import * as exampleontroller from "../controllers/exampleControllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome to my API, Bro";
});

router
  .get("/users", exampleontroller.getUsers)
  .post("/users", exampleontroller.createUser)
  .get("/users/:id", exampleontroller.getUser)
  .put("/users/:id", exampleontroller.updateUser)
  .delete("/users/:id", exampleontroller.deleteUser);

export default router;
