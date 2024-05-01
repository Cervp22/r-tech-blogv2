const router = require("express").Router();
const {User} = require('../models')


router.get('/', async (req,res)=>{
try{
    const users = await User.find();
    if(users){
        res.status(200).json(users)
    }else{
        res.status(400).json({Status:'Check request'})
    }


    }catch(err){
        res.status(500).json({status: 'Request failed', message:'Check Post endpoint!'})
    }   

})

router.get('/:id', async (req,res)=>{
    const users = await User.findById({_id:req.params.id})

    if(users){
        res.status(200).json(users)
    }else(
        res.status(404).json({Status: 'User does not exist'})
    )
})




module.exports = router;
