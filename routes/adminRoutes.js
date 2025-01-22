const express=require('express');
const {addStudent,assignTask}=require('../controllers/adminC');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');


const routes=express.Router();

routes.post('/add-student',authMiddleware,isAdmin,addStudent);
routes.post('/assign-task',authMiddleware,isAdmin,assignTask)

module.exports=routes