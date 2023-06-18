const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const AppConstants = require('../../Constants/AppConstants');
const schema = new Schema({
        id: { type: ObjectId }, // khóa chính
        name: { type: String },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        role: { type: String, default: AppConstants.USER }, // 1-99: User, 100: admin, 1000: system

});

module.exports = mongoose.models.user || mongoose.model('user', schema);

