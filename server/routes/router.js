const express = require('express');
const route = express.Router();

const services = require('../services/render')
const controller = require('../controller/controller');
const catchAsync = require('../utils/catchAsync')

/**
 * @description Root Routs
 * @method GET /
 */
route.get('/', services.homeRoutes)

/**
 * @description Root Routs
 * @method GET /index
 */
route.get('/index', services.homeRoutes)

/**
 * @description Root Routs
 * @method POST /index
 */
route.post('/index', services.homeRoutes)

/**
 * @description view the blog
 * @method GET /blog-page
 */
route.get('/blog-page', services.blogPage)

/**
 * @description create new blog
 * @method GET /new-blog
 */
route.get('/new-blog', services.newBlog)

/**
 * @description edit blog
 * @method GET /edit-blog
 */
route.get('/edit-blog', services.editBlog)


// API
route.post('/api/blogs', controller.create);
route.get('/api/blogs', controller.find);
route.put('/api/blogs/:id', controller.update);
route.delete('/api/blogs/:id', catchAsync(controller.delete));


module.exports = route