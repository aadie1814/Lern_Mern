const user = require('./../models/userSchema')
const contact = require('./../models/contactSchema')
const service = require('./../models/servicesSchema')
const path = require('path');
const filePath = path.join(__dirname, '..', 'assets');
const fs = require('fs');
/* admin user  section */
const getAllUser = async (req, res) => {
    try {
        const userData = await user.find()
        if (!userData || userData.length === 0) {
            return res.status(404).json({ msg: 'No Data Found' })
        }
        else {
            return res.status(200).json(userData)
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
/* admin contact section */
const getAllContact = async (req, res) => {
    try {
        const contactData = await contact.find()
        if (!contactData || contactData.length === 0) {
            return res.status(404).json({ msg: 'No Data Found' })
        }
        else {
            return res.status(200).json(contactData)
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
/* const getAllService = async(req,res) =>{
    try{
        const serviceData = await service.find()
        if(!serviceData ||serviceData.length === 0){
            return res.status(404).json({msg:'No Data Found'})
        }
        else{
            return res.status(200).json(serviceData)
        }
    }
    catch (error) {
        res.status(500).json({msg:'Internal Server Error'})
    }
    }
 */
/* admin single user  section */
const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const data = await user.findOne({ _id: id })
        if (!data) {
            res.status(400).json({ error: 'No User Found' })
        }
        else {
            res.status(200).json(data)
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }

}
/* admin user delete section */
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id

        await user.deleteOne({ _id: id })
        res.status(200).json({ msg: 'User Is Deleted' })

    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
/* admin user update section */
const updateuserById = async (req, res) => {
    const id = req.params.id
    try {
        const update = await user.updateOne(({ _id: id }), { $set: req.body });
        if (!update) {
            return res.status(400).json({ msg: "no data found" })

        } else {
            res.status(200).json({ msg: "update data" })

        }
    } catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })

    }
}
/* admin contact delete section */
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id

        await contact.deleteOne({ _id: id })
        res.status(200).json({ msg: 'User Is Deleted' })

    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
/* services add section */
const addServices = async (req, res) => {
    try {
        const { service_name, description } = req.body
        const { uploadFile } = req.files
        console.log(uploadFile)
        if (!service_name || !description) {
            req.status(400).json({ msg: "All fields are reqired" })
        }
        else {
            uploadFile.mv(path.join(filePath, uploadFile.name))
            const newdata = new service({
                service_name,
                description,
                image: uploadFile.name

            })
            const data = await newdata.save()
            res.status(200).json(data)
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
/* admin services delete section */
const getService = async (req, res) => {
    try {
        const serviceData = await service.find()
        if (!serviceData || serviceData.length === 0) {
            return res.status(404).json({ msg: 'No Data Found' })
        }
        else {
            return res.status(200).json(serviceData)
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}
const deleteServiceById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await service.findById(id);
        if (!data) {
            res.status(404).json('Data not Found')

        }
        /*  delete the file from the static folder */
        const filePath = path.join(__dirname, '..', 'assets', data.image);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath)
        }
        await service.findByIdAndDelete(id)
        res.status(200).json({msg: 'Data and file deleted'});

    }
    catch (error) {
        res.status(500).json({ msg: 'Internal Server Error' })
    }
}










module.exports = { getAllUser, getAllContact, getSingleUser, deleteUserById, updateuserById, deleteContactById, addServices, getService, deleteServiceById }