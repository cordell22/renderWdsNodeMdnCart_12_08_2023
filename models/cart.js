const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    user_session_id: { type: String, required: true },
    product_type: { type: String, enum: ['coffee', 'other'], required: true },
    product_id: { type: Number, required: true },
    date_created: { type: Date, default: Date.now, required: true },
    date_modified: { type: Date, default: Date.now, required: true },
  }
);


module.exports = mongoose.model('Cart', CartSchema);

