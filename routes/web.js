const express =require('express')
const BlogController = require('../controllers/BlogController')
// const StudentController = require('../controllers/StudentController')
const UserController = require('../controllers/User')
const router = express.Router()

// router.post('/register',StudentController.register)
router.post('/create',BlogController.create)
router.post('/display',BlogController.display)
router.get('/view/:id',BlogController.view)
router.post('/update/:id',BlogController.update)
router.post('/delete/:id',BlogController.delete)

//user Controller
router.post('/register',UserController.userregister)
router.post('/verifylogin',UserController.verifylogin)



module.exports=router