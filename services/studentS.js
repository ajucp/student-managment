const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {findTaskByStudentId,updateTaskStatus}=require('../models/taskM');
const { findUserByEmail } = require('../models/studtentM');

const studentLogin=async(email,password)=>{
    console.log("INCOMING DATA FROM SERVICE OF STUDENT LOGIN");
    try {
        const user=await findUserByEmail(email);

        if(!user || user.role !=='student'){
            return {
                success:false,
                status:401,
                message:'Invalid Credentials'
            }
        }

        const isMatch=await bcrypt.compare(password,user.password);
        console.log('ismatch',isMatch)

        if(!isMatch){
            return {
                success:false,
                status:401,
                message:'Invalid Credentials'
            }
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: '1h' });
    return { success: true, token };
    } catch (err) {
        throw new Error('Error during student login');
    }
}

const getTasksForStudent=async(studentId)=>{
    console.log("INCOMING DATA FROM SERVICE OF GET TASKS");
    return findTaskByStudentId(studentId);

};

const changeTaskStatus=async(taskId,status)=>{
    console.log("INCOMING DATA FROM SERVICE OF CHANGE TASK STATUS");
    return updateTaskStatus(taskId,status);
};


module.exports={getTasksForStudent,changeTaskStatus,studentLogin}
