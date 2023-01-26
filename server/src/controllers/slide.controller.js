const Slide = require('../models/slide.model');

const getSlide = async (req, res) => {
  try {
    const slide = await Slide.find({});
    return res.json(slide);
  } catch (error) {
    return res.status(500).json({
      message: `Err Server canot get Slide: ${error}`,
    });
  }
};

const postSlide = async (req, res) => {
  try {
    const newSlide = new Slide(req.body);
    await newSlide.save();
    return res.json({
      slide: newSlide,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Err Server canot post Slide: ${error}`,
    });
  }
};

module.exports = { getSlide, postSlide };
