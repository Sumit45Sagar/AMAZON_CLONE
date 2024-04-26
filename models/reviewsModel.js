const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const reviewModel = mongoose.model('Reviews', reviewSchema);
module.exports = reviewModel;