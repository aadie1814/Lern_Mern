const contact = require('./../models/contactSchema')

const contactForm =async(req,res) =>{
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            res.status(400).json('all fields are required')
        }
        else{
            const data = new contact({
                name: name,
                email: email,
                message:message
            })
            const contactData = await data.save()
            res.status(201).json(contactData )
        }
    }
    catch(error){
        res.status(400).json('Failed to send the data')

    }
}
module.exports = contactForm