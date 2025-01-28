const express = require('express');
const router = express.Router();
const {getAllMovies,postMovies,updateMoviebyId,deleteMovieById,getMovieById} = require("../controllers/movieController")


router.route('/').get(getAllMovies).post(postMovies);

router.route('/:id').get(getMovieById).put(updateMoviebyId).delete(deleteMovieById);

module.exports = router;