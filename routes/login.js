const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	res.end("login ")
})

router.get('/somelogin', (req,res) => {
	res.end("login ")
})

module.exports = router
