const express = require('express');
const router = express.Router();
const Post = require('../models/Posts')

// get all the posts from DB
router.get('/', async (req,res) => {
	try{
		const viewPosts = await Post.find();
		res.json(viewPosts)
	}catch(err){
		res.json({message: err})
	}
	res.end("Welcome")
})

// use /id to display the param
router.get('/:postId', async (req,res) => {
	try{
		const viewPosts = await Post.findById(req.params.postId);
		res.json(viewPosts)
	}catch(err){
		res.json({message: err})
	}
})
router.get('/somepost', (req,res) => {
	res.end("Welcome ")
})

router.post('/', async (req,res) => {
	console.log(req.body)
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		date: req.body.date
	})

	try{
		const savedData = await post.save()
		res.json(savedData)
	}catch(err){
		res.json({message: err})
	}
})

module.exports = router
