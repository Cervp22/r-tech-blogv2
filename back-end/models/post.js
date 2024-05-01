const {Schema, model} = require('mongoose')


const postSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    post:{
        type:String,
        trim:true,
    },
    username:{
        type:String,
        required:true,
    },
    likes:{
        type:Array,
        default:[]
    },
    createdAt:{
    type:Date,
    default: Date.now,
    get:(timestamp)=> new Date(timestamp).toDateString()
},

});
const Post = model( "post", postSchema);

module.exports = Post