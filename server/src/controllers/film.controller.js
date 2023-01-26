const Film = require('../models/film.model');

const upFilm = async (req, res) => {
  const { name } = req.body;
  try {
    const oldFilm = await Film.findOne({ name });
    if (oldFilm) return res.status(400).json('Film have already exiting');
    const newFilm = new Film(req.body);
    await newFilm.save();
    return res.json({
      film: newFilm,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'upload Film err',
    });
  }
};

const updateFilm = async (req, res) => {
  const { id } = req.params;
  try {
    const film = await Film.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log(
      '🚀 ~ file: film.controller.js ~ line 27 ~ updateFilm ~ film',
      film,
    );
    if (!film) {
      return res.status(400).json('Not found to update');
    }
    return res.json({
      film: film,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Update Film err',
    });
  }
};
const allFilm = async (req, res) => {
  try {
    const film = await Film.find({});
    return res.json(film);
  } catch (error) {
    return res.status(500).json({
      message: `Err Server canot get Slide: ${error}`,
    });
  }
};

const singleFilm = async (req, res) => {
  const { slug } = req.params;
  console.log(
    '🚀 ~ file: film.controller.js ~ line 57 ~ singleFilm ~ slug',
    slug,
  );
  try {
    const film = await Film.findOne({ slug }).exec();
    return res.json(film);
  } catch (error) {
    return res.status(500).json({
      message: `Err Server canot get Slide: ${error}`,
    });
  }
};

module.exports = { upFilm, singleFilm, allFilm, updateFilm };
