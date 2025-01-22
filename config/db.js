const mongodb=require('mongodb');

const mongoClient=mongodb.MongoClient;
let _db;


const mongoConnect=async(callback)=>mongoClient.connect(
    'mongodb://localhost:27017/'
     )
    .then(client=>{
        console.log("DATA_BASE IS CONNECTED");
        _db=client.db('student-managment');
        callback()
    })
    .catch(err=>{
        console.log(err);
        throw err
        }     
    )

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw "NO DATABASE IS FOUND"
}

module.exports={mongoConnect,getDb}
// const mongodb = require('mongodb');

// const mongoClient = mongodb.MongoClient;
// let _db;

// const mongoConnect = async () => {
//     try {
//         const client = await mongoClient.connect('mongodb://localhost:27017/');
//         console.log('DATABASE_CONNECTED');
//         _db = client.db('student-managment');
//     } catch (err) {
//         console.log('Failed to connect to database:', err);
//         throw err;
//     }
// };

// const getDb = () => {
//     if (!_db) {
//         throw new Error('No database found. Ensure mongoConnect is called first.');
//     }
//     return _db;
// };

// module.exports = { mongoConnect, getDb };
