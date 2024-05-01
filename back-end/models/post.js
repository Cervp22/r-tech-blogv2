const {Schema, model} = require('mongoose')


const postSchema = new Schema({
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

postSchema.virtual("likescCount").get(function () {
    return this.likes.length();
});

const Post = model( "post", postSchema);

module.exports = Post