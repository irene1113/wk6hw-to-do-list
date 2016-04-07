var mongoose = require('mongoose');
mongoose.connect('mongodb://irene:a123456@ds011870.mlab.com:11870/pocket_note');
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  note : String,
  date  : String,
//  n_type : String,
  ball : String,
  imgContentData: Buffer,
  imgContentType: String
});
module.exports = mongoose.model('Note', noteSchema);
