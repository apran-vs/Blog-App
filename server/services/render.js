const axios = require('axios');


exports.homeRoutes = (req, res)=>{
    // Make a get request to api/blogs
    axios.get('http://localhost:3000/api/blogs')
        .then(function(response){
            // console.log(response);
            res.render('index', {blogs:response.data});
        })
        .catch(err=>{
            res.send(err);
        })

}

exports.blogPage = (req, res)=>{
    axios.get('http://localhost:3000/api/blogs', {params : {id:req.query.id}})
        .then(function(blogdata){
            res.render('blog-page',{blogs:blogdata.data});
            console.log({blogs:blogdata.data})
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.newBlog = (req, res)=>{
    res.render('new-blog');
}

exports.editBlog = (req, res)=>{
    axios.get('http://localhost:3000/api/blogs', {params : {id:req.query.id}})
        .then(function(blogdata){
            res.render('edit-blog',{blogs:blogdata.data});
        })
        .catch(err=>{
            res.send(err);
        })
}