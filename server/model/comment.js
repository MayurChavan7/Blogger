import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    postId: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    comments: {
        type: String,
        required: false
    }
});


const comment = mongoose.model('comment', CommentSchema);

export default comment;