const express = require('express')
const router = express.Router()

//controllers
const AuthController = require('./controllers/AuthController')
const PostController = require('./controllers/PostController')

//Middlewares
const auth = require('./middlewares/auth')


//Home
router.get('/', (req, res) => {
    res.json({ name: 'jose rosales' })
})

// two ruter the logIn and Register
router.post('/api/signin', AuthController.singIn);
router.post('/api/signup',AuthController.singUp)

// Post Routers

router.get('/api/posts', auth , PostController.index)


module.exports = router;