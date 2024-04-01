const express = require('express')
const adminControllers = require('../controllers/admin-controllers')
const router = express.Router()

router.get('/user',(adminControllers.getAllUser))
router.get('/contact',(adminControllers.getAllContact))
router.get('/user/:id',(adminControllers.getSingleUser))
router.delete('/user/delete/:id',(adminControllers.deleteUserById))
router.put('/user/update/:id',(adminControllers.updateuserById))
router.delete('/contact/delete/:id',(adminControllers.deleteContactById))
router.post('/service/post',(adminControllers.addServices))
/* router.get('/admin/services/delete/:id',(adminControllers.)) */
 router.get('/service',(adminControllers.getService))
 router.delete('/service/delete/:id',(adminControllers.deleteServiceById))

module.exports = router
