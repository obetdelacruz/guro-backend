import News from "../models/News.js";

//HTTP GET ALL NEWS
async function getNews(req, res) {
  const news = await News.find({});
  return res.status(200).json(news);
}

//HTTP GET NEWS BY ID
async function getNewsById(req, res) {
  const id = req.params.id;
  const news = await News.findById(id);

  return res.status(200).json(news);
}

//http create/post news
async function createNews(req, res) {
  try {
    const { title, description, author, date } = req.body;

    const newNews = new News({
      title,
      description,
      author,
      date,
    });

    const savedNews = await newNews.save();
    res.status(201).json(savedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create news article" });
  }
}

//HTTP UPDATE NEWS
async function updateNews(req, res) {
  try {
    const newsId = req.params.id;
    const { title, description, author, date } = req.body;

    const updatedNews = await News.findByIdAndUpdate(
      newsId,
      { title, description, author, date },
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ error: "News article not found" });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update news article" });
  }
}

//http delete news
async function deleteNews(req, res) {
  try {
    const newsId = req.params.id;
    await News.findByIdAndDelete(newsId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete news article" });
  }
}

export default {
  //other Routes
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
};
