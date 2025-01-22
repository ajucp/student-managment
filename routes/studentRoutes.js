const express=require('express');
const {getTasks,changeTaskStatus}=require('../controllers/studentC');
const {authMiddleware}=require('../middleware/authMiddleware');


const routes=express.Router();

routes.get('/tasks',authMiddleware,getTasks);
routes.patch('/task/status',authMiddleware,changeTaskStatus);

module.exports=routes;