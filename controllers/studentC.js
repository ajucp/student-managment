const studentService=require('../services/studentS')

exports.studLogin=async(req,res)=>{
    try {
        console.log("INCOMING DATA FROM POST-MAN OF STUDENTS LOGIN",req.body);
        const {email,password}=req.body;
        console.log(email,password)
        const response=await studentService.studentLogin(email,password)

        if(!response.success){
            return res.status(response.status).json({message:response.message});

        }
        res.status(200).json({ token: response.token });
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}


exports.getTasks=async(req,res)=>{
    // console.log('studid')
    try {
        console.log("INCOMING DATA FROM POST-MAN OF GET TASK ");
        const studId=req.user._id.toString();
        console.log("student:",req.user)
        console.log("student id:",studId)
        const tasks=await studentService.getTasksForStudent(studId);
        res.status(200).json(tasks);
        
    } catch (err) {
        res.status(500).json({error:err.message})
    }
};

exports.changeTaskStatus=async(req,res)=>{
    try {
        console.log("INCOMING DATA FROM POST-MAN OF TASK STATUS",req.body);
        const {taskId,status}=req.body;
        console.log(taskId,status);
        const updatedTask=await studentService.changeTaskStatus(taskId,status);
        res.status(200).json(updatedTask);
        
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}