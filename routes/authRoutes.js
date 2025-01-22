const express=require('express');

const {adminLogin}=require('../controllers/adminC');
const {studLogin}=require('../controllers/studentC');


const routes=express.Router();

routes.post('/admin/login',adminLogin);
routes.post('/student/login',studLogin);

module.exports=routes;