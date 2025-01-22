const getDb=require('../config/db').getDb;
const { ObjectId } = require('mongodb');

const createTask=async(taskData)=>{
    console.log("INCOMING DATA FROM MODELS OF CREATE TASK");
    try {

        const db = getDb();
        const task = await db.collection('tasks').insertOne(taskData);
        return task;

    } catch (error) {
        console.error('Error creating task:', error);
        throw new Error('Failed to create task');
    }
};

const findTaskByStudentId=async(studentId)=>{
    console.log("INCOMING DATA FROM MODELS OF FIND TASK");
    try {
        const db = getDb();
        const taskById = await db.collection('tasks').find({ assignedTo: studentId }).toArray();
        console.log('Found tasks:', taskById);
        return taskById;
    } catch (error) {
        console.error('Error finding tasks by student ID:', error);
        throw new Error('Failed to find tasks');
    }
};

const updateTaskStatus=async(taskId,status)=>{
    console.log("INCOMING DATA FROM MODELS OF UPDATE TASK");
    try {
        const db = getDb();
        const objectId = new ObjectId(taskId);
        const updateTask = await db.collection('tasks').updateOne(
            { _id: objectId },
            { $set: { status } }
        );
        console.log('Update result:', updateTask);
        return updateTask;
    } catch (error) {
        console.error('Error updating task status:', error);
        throw new Error('Failed to update task status');
    }
};

module.exports={createTask,findTaskByStudentId,updateTaskStatus};