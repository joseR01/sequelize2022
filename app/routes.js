const express = require('express')
const router = express.Router()

//HOME
router.get('/',(req,res)=>{
    res.json({name:'jose rosales'})
})

module.exports = router;