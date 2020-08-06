/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { Router } from "./../../dependences.ts";

import { exampleController } from "../controllers/exampleController2.ts";

const controller2 = new exampleController();

const router2 = new Router();

router2.get("/", ({ response }) => {
  response.body = "Welcome to my API, Bro";
});

router2
  .get("/examples", controller2.getExample)
  .post("/setExample", controller2.setExample)
  .get("/usersMongo", controller2.getUsersMongo)
  .post("/setUsersMongo", controller2.setUserMongo)

export default router2;
