const mongoose = require("mongoose");

const Schema = mongoose.Schema;// Create Schema

const ContentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    videoobject: {},
    finalLink: {
        type: String
    },
    ready: {
        type: Boolean,
        default: null
    }
})

const CourseSchema = new Schema({
    mentorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    categories: [],
    subcategories: [],
    approved: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
    },
    submitted: {
        type: Boolean,
        default: false
    },
    contents: [ContentSchema],
    created: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Course", CourseSchema);
