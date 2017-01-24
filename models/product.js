var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String},
    imagePath: {type: String},
    category: {type: String},
    description: {type: String},
    size: {type: String},
    price: {type: String},
    featured: {type: Boolean}
});

module.exports = mongoose.model('Product', schema);
