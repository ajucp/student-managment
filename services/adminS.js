const bcrypt=require('bcrypt');
const {createUser,findUserByEmail}=require('../models/studtentM');
const {createTask}=require('../models/taskM');
const jwt =require('jsonwebtoken');



const createAdmin = async () => {
    console.log("INCOMING DATA FROM SERVICE OF CREATE ADMIN");
    try {

        console.log('Checking for existing admin...');
        const adminExists = await findUserByEmail('admin@admin.com');
        console.log('Admin exists:', adminExists);

        if (!adminExists) {
            console.log('Admin does not exist. Creating admin...');

            const hashedPassword = await bcrypt.hash('admin', 10);
            await createUser({
                name: 'Admin',
                email: 'admin@admin.com',
                password: hashedPassword,
                role: 'admin',
            });

            console.log('Admin created successfully!!');
        } else {
            console.log('Admin already exists!!');
        }
    } catch (error) {
        console.error('Error in createAdmin:', error.message);
    }
};


const adminLog=async(email,password)=>{
    console.log("INCOMING DATA FROM SERVICE OF ADMIN LOGIN");
    try {
        const user=await findUserByEmail(email)

        if(!user || user.role !=='admin'){
            return {
                success:false,
                status:401,
                message:'Invalid Credentials'
            }
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return {
                success:false,
                status:401,
                message:'Invalid Credentials'
            } ;
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_TOKEN,{expiresIn:'1h'});
        return {
            success:true,
            token
        };

    } catch (err) {
        throw new Error("Error in Admin Login");
        
    }
}

const addStudent=async(studentData)=>{
    console.log("INCOMING DATA FROM SERVICE OF ADD STUDENT");
    const {name,email,password,department}=studentData;
    const hashedPassword=await bcrypt.hash(password,10);

    return createUser({
        name,
        email,
        password:hashedPassword,
        department,
        role:'student',

    });
};

const assignTask=async(taskData)=>{
    console.log("INCOMING DATA FROM SERVICE OF ASSIGN TASK");
    return createTask(taskData);

};

module.exports={createAdmin,addStudent,assignTask,adminLog}