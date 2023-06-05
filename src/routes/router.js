// imports
const express = require('express')
const uploads = require('../storage/storage')

// middleware
const auth = require('../middleware/auth')

// router
const router = express()

// auth modules
const AuthLogin = require('../modules/Auth/login')
const AuthRegister = require('../modules/Auth/register')

// user modules
const GetUsers = require('../modules/Users/get-users')
const DeleteUser = require('../modules/Users/delete-user')

// modules
const IndexModule = require('../modules/index')
const CreateCategory = require('../modules/Categories/create-category')
const GetCategories = require('../modules/Categories/get-categories')
const UpdateCategory = require('../modules/Categories/update-category')
const DeleteCategory = require('../modules/Categories/delete-category')
const CreateMovie = require('../modules/Movies/create-movie-post')
const GetMovies = require('../modules/Movies/get-movies')
const SendMovieFile = require('../modules/Movies/send-movie-file')
const DeleteMoviePost = require('../modules/Movies/delete-movie-post')
const Rate = require('../modules/Movies/rating/rate')
const GetTopMovies = require('../modules/Movies/rating/get-top-movies')
const ReturnUser = require('../modules/Users/return-user')

// login or register route
router.post('/auth/login', AuthLogin)
router.post('/auth/register', AuthRegister)

// api modules
router.use('/', auth)
router.get('/api/docs', IndexModule)
router.get('/api/get-users', GetUsers)
router.delete('/api/delete-user', DeleteUser)
router.post('/api/create-category', CreateCategory)
router.get('/api/get-categories', GetCategories)
router.put('/api/update-category', UpdateCategory)
router.delete('/api/delete-category', DeleteCategory)
router.post('/api/create-movie', uploads, CreateMovie)
router.get('/api/get-movies', GetMovies)
router.get('/api/get-movie-file', SendMovieFile)
router.delete('/api/delete-movie-post', DeleteMoviePost)
router.post('/api/rate-movie', Rate)
router.get('/api/get-top-movies', GetTopMovies)
router.get('/api/return-user', ReturnUser)

module.exports = router