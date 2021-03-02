import express from 'express';
const Router = express.Router();
import {getPosts, createPost} from '../controllers/post.js';

//Route to retrieve all posts
Router.get('/', getPosts);
// Route to create a post
Router.post('/', createPost);






export default Router;