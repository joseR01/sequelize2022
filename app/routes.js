const express = require('express')
const router = express.Router()

//controllers
const AuthController = require('./controllers/AuthController')

//Home
router.get('/', (req, res) => {
    res.json({ name: 'jose rosales' })
})

// two ruter the logIn and Register
router.post('/api/signin', AuthController.singIn);
router.post('/api/signup',AuthController.singUp)



module.exports = router;