const mongoose = require('mongoose');
const model = mongoose.model;
const {UserSchema} = require('../schemas/UserSchema');

const UserModel = model('user', UserSchema);

module.exports = {UserModel};