const express = require('express');
const { MovieController } = require('./movie.controller');
const { UserController } = require('./user.controller');
const router = express.Router();
const userController = new UserController();
const movieController = new MovieController();
// product routes
router.get('/', index);

// auth routes
router.post('/api/v1/auth/register', userController.register);
router.post('/api/v1/auth/login', userController.login);

//users
router.get('/api/v1/users', userController.getUsers);

//movies
router.post('/api/v1/movies', movieController.addMovie);
router.get('/api/v1/movies', movieController.getMovies);
router.get('/api/v1/movies/:id', movieController.getMovie);
router.delete('/api/v1/movies/:id', movieController.deleteMovie);


async function index(req,res){
    res.send("Welcome to MovieApp Mock API");
}

module.exports = router;
