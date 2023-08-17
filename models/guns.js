const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GunSchema = new Schema(
  {
    guns_categories_id: { type: Schema.Types.ObjectId, ref: 'GunsCategory', required: true },
    size_id: { type: Schema.Types.ObjectId, required: true },
    hand_sub: String,
    pist_revolv: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    date_created: { type: Date, default: Date.now, required: true },
  }
);

module.exports = mongoose.model('Gun', GunSchema);