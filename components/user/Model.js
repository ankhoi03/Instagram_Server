const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Object}, 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  website: String,
  bio: String,
  email: String,
  phone: String,
  gender: String,
  postSaved: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
});

module.exports = mongoose.models.user || mongoose.model("user", schema);
