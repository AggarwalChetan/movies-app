const express = require('express');
const app = express();
const router = express.Router();
const { default: axios } = require('axios');

// To work on the response in json
router.use(express.json());

const DEFAULT_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=61cec280feda32b806f9f3187c008707&page=3";
const SEARCH_MOVIES_API = "http://api.themoviedb.org/3/search/movie?&api_key=61cec280feda32b806f9f3187c008707&query=";

movies = {};
const getMovies = (req, res) => {
    axios(DEFAULT_MOVIES_API)
    .then(res => res.data)
    .then(data => {
        movies = data;
        res.send(movies);
    })
};

router.get('/', getMovies);

searchMovies = {};
const getMoviesBySearch = (req, res) => {
    console.log(user);
    axios(SEARCH_MOVIES_API + req.body.searchValue)
    .then(res => res.data)
    .then(data => {
        movies = data;
        res.send(searchMovies);
    })
}

router.post('/Search', getMoviesBySearch);

module.exports = router;