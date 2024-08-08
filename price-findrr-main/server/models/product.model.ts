import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: { 
        type: String, 
        required: true 
    },
    currency: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    productTitle: { 
        type: String, 
        required: true 
    },
    current_price: { 
        type: Number, 
        required: true 
    },
    original_price: { 
        type: Number, 
        required: true 
    },
    lowestPrice: { 
        type: Number 
    },
    highestPrice: { 
        type: Number 
    },
    averagePrice: { 
        type: Number 
    },
    priceHistory: [
        {
            price: { type: Number, required: true },
            date: { type: Date, required: true }
        }
    ],
    discountRate: { 
        type: Number 
    },
    description: { 
        type: String 
    },
    rating: { 
        type: Number 
    },
    outOfStock: { 
        type: Boolean, 
        default: false 
    },
    category: {
        type: String
    },
    users: [
        {
            email: {
                type: String, 
                required: true
            }
        }
    ], default: [],
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

