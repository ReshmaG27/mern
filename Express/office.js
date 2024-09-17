const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url='mongodb+srv://RESHMA_G:MongoDB27@cluster0.rg4bh.mongodb.net/';
const client = new MongoClient(url);
// Database Name
const dbName = 'office';

async function insertData(){
    let empData ={
        "name":"Reshma",
        "mobile":"9840410086",
        "address":"parrys",
    }
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log('Record inserted');
}


insertData();