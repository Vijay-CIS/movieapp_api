const {MovieDAO} = require('./movie.dao')

class MovieController {

  async addMovie(req, res) {
    const movie = req.body;
    console.log(movie);
    let result = await MovieDAO.save(movie);
    res.status(201).json({ id: result });
  }

  async deleteMovie(req, res) {
    const movieId = req.params.id;
    console.log(movieId);
    let result = await MovieDAO.delete(movieId);
    res.status(201).json({ id: result });
  }

  async getMovies(req, res) {
    let movies = await MovieDAO.findAll();
    res.status(200).json(movies);
  }

  async getMovie(req, res) {
    let movieId = req.params.id;
    let movies = await MovieDAO.findOne(movieId);
    res.status(200).json(movies);
  }
}

exports.MovieController = MovieController;