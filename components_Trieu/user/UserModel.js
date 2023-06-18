const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Object}, 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  image:String,
  website: String,
  bio: String,
  email: { type: String, required: true },
  phone: String,
  gender: String,
  postSaved: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }],
});

module.exports = mongoose.models.user || mongoose.model("user", schema);
