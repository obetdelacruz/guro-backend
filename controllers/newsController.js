import News from "../models/News.js";

async function getNews(req, res) {
  res.send("News resource");
}

async function getNewsById(req, res) {
  res.send("News resource by id");
}

async function createNews(req, res) {
  res.send("News has been created");
}

async function updateNews(req, res) {
  res.send("News has been updated");
}

async function deleteNews(req, res) {
  res.send("News has been deleted");
}
export default {
  //other Routes
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};
