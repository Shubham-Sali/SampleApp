const mongoose = require('mongoose')

const SampleApp = new mongoose.Schema({
    name: String,
    position: String,
    phone: String,
    email: String,
    following: String,
    followers: String,
    status: String,
    profilePicture: String,
    coverPicture: String,
    bloodGroup: String,
    gender: String,
    donationDate: String
})

mongoose.model('sample', SampleApp);