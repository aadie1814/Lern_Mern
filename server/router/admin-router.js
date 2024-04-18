const express = require('express')
const verifyToken = require('../middlewares/auth-middleware')
const adminControllers = require('../controllers/admin-controllers')
const router = express.Router()

router.get('/user', verifyToken, adminControllers.getAllUser)
router.get('/contact',verifyToken,adminControllers.getAllContact)
router.get('/user/:id',(adminControllers.getSingleUser))
router.delete('/user/delete/:id',(adminControllers.deleteUserById))
router.put('/user/update/:id',(adminControllers.updateuserById))
router.delete('/contact/delete/:id',(adminControllers.deleteContactById))
router.post('/service/post',verifyToken, adminControllers.addServices)
/* router.get('/admin/services/delete/:id',(adminControllers.)) */
 router.get('/service',(adminControllers.getService))
 router.delete('/service/delete/:id',verifyToken,adminControllers.deleteServiceById)

module.exports = router
