const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require:true
    },

    email: {
        type: String,
        require:true
    },

    contact: {
        type: String,
        require:true
    },

    password: {
        type: String,
        require:true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})
const User = new mongoose.model('user', userSchema)
module.exports =User