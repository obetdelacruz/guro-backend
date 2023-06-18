import express from "express";
import rulesController from "../controllers/rulesController.js";

const rulesRouter = express.Router();

rulesRouter.get("/", rulesController.getRules);

rulesRouter.get("/:id", rulesController.getRulesById);

rulesRouter.post("/", rulesController.createRules);

rulesRouter.put("/:id", rulesController.updateRules);

rulesRouter.delete("/:id", rulesController.deleteRules);

export default rulesRouter;
