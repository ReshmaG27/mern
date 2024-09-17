const { MongoClient, ObjectId } = require( 'mongodb');

const url = 'mongodb+srv://RESHMA_G:mongodb2704@cluster0.rg4bh.mongodb.net/';
const client = new MongoClient(url);
var express = require("express");
var app = express();
app.use(express.json());
app.use((req,res,next)=>{
    let {token} = req.headers;
    if (token == "" || token == undefined){
        res.json({"msg":"please enter a token"})
    }else{
        next();
    }
})

var cors = require("cors");
app.use(cors());
var jwt = require('jsonwebtoken');

app.post("/api/createjob",async(req,res)=>{
    let body = req.body;
    let data = {
        'name':body['name'],
        'companyname':body['companyname'],
        'requirement':body['requirement']
    }
    await client.connect();
        let db = client.db("job_portal");
        
    await db.collection("listing_jobs").insertOne(data);
        res.status(200).json({"message":"created!!"})
})

app.get("/api/display_job",async(req,res)=>{
    await client.connect();
    let db = client.db("job_portal");
    let list = await db.collection("listing_jobs").find({}).toArray();
    res.status(200).json(list)
})

app.put("/api/update",async(req,res)=>{
    let {name,companyname,requirement} = req.body;
    await client.connect();
    let db = client.db("job_portal");
    await db.collection("listing_jobs").updateOne({"name":name},{$set:{"companyname":companyname,"requirement":requirement}});
    res.json({"msg":"Updated"});
})

app.post("/api/updateJobsById", async (req, res) => {
    const { id, requirement, name, companyname } = req.body; // Extract from req.body
    await client.connect();
    let db = client.db("job_portal");

    // Update multiple fields including name, companyname, and requirement
    await db.collection("listing_jobs").updateOne(
      { "_id": new ObjectId(id) },
      { $set: { "name": name, "companyname": companyname, "requirement": requirement } }
    );

    res.json({ "msg": "Job updated" });
});

app.delete("/api/delete",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db = client.db("job_portal");
    await db.collection("listing_jobs").deleteOne({"name":name})
    res.json({"msg":"Deleted"})
})

app.delete("/api/deleteJobsById",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db("job_portal");
    await db.collection("listing_jobs").deleteOne({"_id":new ObjectId(id)});
    res.json({"msg" :"Job deleted"});
 })

app.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    await client.connect();
    let db = client.db("office");
    let loginres = await db.collection("Teacher").find({"email":email,"password":password}).toArray();
    if (loginres.length>0){
        var token = jwt.sign({"name":loginres[0]["email"]},'SECRET')
        res.json({"msg":"You are correct","token":token})
    }else{
        res.json({"msg":"You are wronng"})
    }
})

app.listen(1234,()=>{
    console.log("server Started")
})