const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']        
    },  
    categories: {
        type: String
    },
    content: {
        type: String
    }
    // add in geo location

});

const Posts = mongoose.model('post', PostSchema);

module.exports = Posts;