const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({

    service_name: {
        type: String,
        require:true
    },

    description: {
        type: String,
        require:true
    },
    image:{
        type:String,
        require:true
    }

    

})
const Service = new mongoose.model('Service', servicesSchema)
module.exports =Service