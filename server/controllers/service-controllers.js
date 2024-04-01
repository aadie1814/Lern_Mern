const service = require('./../models/servicesSchema')
const services = async (req,res) =>{
    try{
        const getData =await service.find()
        if(!getData){
            res.status(400).json({msg:'No Service Found'})
        }
        else{
            res.status(200).json(getData)
        }
    }
    catch{
        res.status(400).json({msg:'Internal Server Error'})
    }
}
module.exports = services