var BlogDB = require('../model/model');

// create and save new Blog
exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    // new blog
    const blog = new BlogDB({
        Title:req.body.Title,
        imgURL:req.body.imgURL,
        Discription:req.body.Discription,
        DateOfBlog:new Date()
    })

    // save blog in database
    blog
        .save(blog)
        .then(data=>{
            // res.send(data)
            res.redirect('/index')
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return Blog
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        BlogDB.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        BlogDB.find()
        .then(blog=>{
            res.send(blog)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error Occurred while retriving blog info"
            })
        })
    }

}

// update a blog by title
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
    }

    const id = req.params.id;
    BlogDB.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Update blog with ${id}, Maybe user not found`})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error Update Blog info"})
        })
}

// delete the blog by title
exports.delete =async (req, res) => {
    const id = req.params.id;

    const result = await BlogDB.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Delete with id ${id}, Maybe id is wrong`});
            }else{
                res.send({message:"Blog was deleted successfully!"});
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Could not delete User with id=" + id});
        });
    // return result;
}