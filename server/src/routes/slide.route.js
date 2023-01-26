const express = require('express');
const { getSlide, postSlide } = require('../controllers/slide.controller');
const router = express.Router();

router.post('/', postSlide);
router.get('/', getSlide);
module.exports = router;
