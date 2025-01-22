const {getDb} = require('../config/db');
const { ObjectId } = require('mongodb');

const createUser = async (studentData) => {
    // const db=getDb();
    try {
        console.log("INCOMING DATA FROM MODELS OF CREATEUSERS");
        const db = getDb();
        const existingUser = await db.collection('students').findOne({ email: studentData.email });

        if (existingUser) {
            return {
                message: 'Email already exists',
            };
        }
        const result = await db.collection('students').insertOne(studentData);
        return result;

    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
};


const findUserByEmail = async (email) => {
    console.log("INCOMING DATA FROM MODELS OF FIND BY EMAIL");
    try {

        if (!email) {
            throw new Error('Email is required');
        }

        const db = getDb(); 
        console.log('Looking for email:', email); 

        const studEmail = await db.collection('students').findOne({ email });
        // console.log('Query result:', studEmail); 
        return studEmail; 

    } catch (error) {
        throw new Error(`Failed to find user by email: ${error.message}`);
    }
};


const findUserById = async (id) => {
    console.log("INCOMING DATA FROM MODELS OF FIND BY USER ID");
    try {
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        const db = getDb();
        const studId = await db.collection('students').findOne({ _id: new ObjectId(id) });
        return studId;
    } catch (error) {
        throw new Error(`Failed to find user by ID: ${error.message}`);
    }
};

module.exports = { createUser, findUserByEmail, findUserById };
