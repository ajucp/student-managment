const express=require('express');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const mongoConnect=require('./config/db').mongoConnect;
const adminRoutes=require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const studentRoutes=require('./routes/studentRoutes');
const adminService=require('./services/adminS');

const app=express()
dotenv.config();
app.use(bodyParser.json());

console.log('MAIN APP');


// Moving the admin creation logic inside the mongoConnect 
mongoConnect(() => {

    
    adminService.createAdmin();             // After database connection  admin is creating

    // Set the routes after DB connection is ready
    
    app.use('/v1/api/auth', authRoutes);
    app.use('/v1/api/admin', adminRoutes);
    app.use('/v1/api/student', studentRoutes);

    
    app.listen(3000);
});
