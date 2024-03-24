const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageURL: {
            type: String,
            required: false,
        },
        colour: {
            type: Number,
            required: false,
        },
        size: {
            type: Number,
            required: false,
        },
        category: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;