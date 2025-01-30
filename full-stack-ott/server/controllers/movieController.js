const Movie = require("../models/movieModal");
const { db } = require("../services/config");

const getAllMovies = async (req, res) => {
  try {

    const newMovie = new Movie()
    const result = await newMovie.getMovie()

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postMovies = async (req, res) => {
    const { title, genre, director,releaseDate,duration,language,rating,posterUrl,trailerUrl } = req.body;
    try {

      if (!title || !genre || !director || !releaseDate || !duration || !language || !rating || !posterUrl || !trailerUrl) {
        res.status(400).json({ error: "Please provide all details" });
        return;
      }
      const newMovie = {
        title,
        genre,
        director,
        releaseDate,
        duration,
        language,
        rating,
        posterUrl,
        trailerUrl
      };
    
      await db.collection("posts").insertOne(newMovie);
      res.status(200).json(newMovie);
      console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

const updateMoviebyId = async (req, res) => { 
  const { title, genre, director,releaseDate,duration,language,rating,posterUrl,trailerUrl } = req.body;
  const { id } = req.params;
  const updateMovie = {
    title,
    genre,
    director,
    releaseDate,
    duration,
    language,
    rating,
    posterUrl,
    trailerUrl
  }
  try {
    await db.collection("posts").updateOne({ _id: id}, { $set: updateMovie });
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection("posts").deleteOne({ _id: id });
    res.status(200).json({ message: "Movie deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await db.collection("posts").findOne({ _id: id });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllMovies, postMovies, updateMoviebyId, deleteMovieById, getMovieById};
