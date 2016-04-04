var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds015780.mlab.com:15780/yulontest');
//mongoose.connect('mongodb://localhost:27017/username');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname : String,
  lastname  : String
});
module.exports = mongoose.model('Person', personSchema);
