const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
  id: { type: ObjectId },
  userid: {
    type: String,
  },
  username: { type: String },
  content: { type: String },
  image: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    content: { type: String },
  }]


});
module.exports = mongoose.models.post || mongoose.model('post', schema);
//post ------->posts