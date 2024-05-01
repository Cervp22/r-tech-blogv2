const router = require("express").Router();
const {Post} = require('../models')


router.post('/', async (req,res)=>{
    const {userPost, username} = req.body;
    try{
        const post = await Post.create({post:userPost, username:username})

    if (post){
        res.status(200).json({status:'Success'})
    }else{
        res.status(404).json({status:'Failed', message:"Check post for errors"})
    }

    }catch(err){
        res.status(500).json({status: 'Request failed', message:'Check Post endpoint!'})
    }   

})

router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();

    if(posts){
        res.status(200).json(posts)
    }else{
        res.status(404).json({Status:'Check request for errors!'})
    }

    }catch(err){
        res.status(500).json({Status:"Check endpoint!"})
    }
})



module.exports = router;
