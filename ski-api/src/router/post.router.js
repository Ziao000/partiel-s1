const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');   

router.get('/post', PostController.getAll);
router.post('/post', PostController.create);
router.put('/post/:id', PostController.update);
router.delete('/post/:id', PostController.delete);

module.exports = router;