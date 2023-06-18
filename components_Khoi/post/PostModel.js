const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
  id: { type: ObjectId },
  userid: { type: Schema.Types.ObjectId, ref: 'user' },
  content: { type: String },
  image: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  comments: [{
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content: { type: String },
  }]


});
module.exports = mongoose.models.post || mongoose.model('post', schema);
//post ------->posts