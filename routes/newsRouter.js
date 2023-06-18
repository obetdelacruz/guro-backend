import express from "express";
import newsController from "../controllers/newsController.js";

const newsRouter = express.Router();

newsRouter.get("/", newsController.getNews);

newsRouter.get("/:id", newsController.getNewsById);

newsRouter.post("/", newsController.createNews);

newsRouter.put("/:id", newsController.updateNews);

newsRouter.delete("/:id", newsController.deleteNews);

export default newsRouter;
