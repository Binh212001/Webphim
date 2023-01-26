const express = require('express');
const {
  upFilm,
  allFilm,
  singleFilm,
  updateFilm,
} = require('../controllers/film.controller');
const router = express.Router();

router.post('/upfilm', upFilm);
router.put('/update/:id', updateFilm);
router.get('/all', allFilm);
router.get('/:slug', singleFilm);

module.exports = router;
