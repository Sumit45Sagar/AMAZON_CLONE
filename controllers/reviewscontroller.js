const Review = require("../models/reviewsModel.js");

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addReview = async (req, res) => { 
    const newReview = new Review({
        productId: req.body.productId,
        userId: req.body.userId,
        review: req.body.review,
        rating: req.body.rating,
    });

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateReview = async (req, res) => {
    const reviewId = req.params.id; 

    try {
        let review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        if (req.body.productId != null) {
            review.productId = req.body.productId;
        }
        if (req.body.userId != null) {
            review.userId = req.body.userId;
        }
        if (req.body.review != null) {
            review.review = req.body.review;
        }
        if (req.body.rating != null) {
            review.rating = req.body.rating;
        }

        review = await review.save();
        res.json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const deleteReview = async (req, res) => {
    const reviewId = req.params.id; 

    try {
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        await review.deleteOne();
        res.json({ message: 'Review deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
    getAllReviews,
    addReview,
    updateReview,
    deleteReview
};
