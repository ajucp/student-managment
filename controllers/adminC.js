const adminService=require('../services/adminS');

exports.adminLogin=async(req,res)=>{
    console.log('hai')
    try {
        console.log("INCOMING DATA FROM POST-MAN FOR ADMIN LOGIN",req.body);
        
        const {email,password}=req.body;
        const response=await adminService.adminLog(email,password);

        if(!response.success){
            return res.status(response.status).json({message:response.message});

        }

        res.status(200).json({token:response.token});
        
    } catch (err) {
        res.status(500).json({err:err.message})
    }
}
exports.addStudent=async(req,res)=>{
    console.log("hai")
    try {
        console.log("INCOMING DATA FROM POST MAN OF STUDENTS",req.body);
        const studentData=req.body;
        const student=await adminService.addStudent(studentData);
        res.status(201).json(student);
    } catch (err) {
        console.log("ERROR IN ADD STUDENTS CONTROLLERS");
        res.status(500).json({err:err.message})
    }
};

exports.assignTask=async(req,res)=>{
    try {
        console.log(req.body,"INCOMING DATA FROM POST MAN FOR TASK");
        const studentTask=req.body;
        const task=await adminService.assignTask(studentTask);

        res.status(201).json(task);
    } catch (err) {
        console.log("ERROR IN ASSIGN TASK FOR STUDENTS CONTROLLERS");
        res.status(500).json({err:err.message});
    }
}