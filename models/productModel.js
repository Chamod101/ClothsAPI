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
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        colour: {
            type: String,
            required: false,
        }
        ,
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;