const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        min: 3,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 5,
        required: true,
    },
    cartItems: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    currAddress: {
        type: mongoose.Types.ObjectId,
        ref: 'Address',
    }
}, { timestamps: true });

module.exports = mongoose.model('users', UserSchema);