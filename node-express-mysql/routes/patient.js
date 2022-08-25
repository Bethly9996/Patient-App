var { query } = require('express');
const express = require('express');
const connection = require('../database');
const router = express.Router();

router.post('/create',(req, res, next) => {
    let patient = req.body;
    query = "insert into Patient(name,dob,gender,phone_number,date_created) values(?,?,?,?,?)";
    connection.query(query,[patient.name,patient.dob,patient.gender,patient.phone_number,patient.date_created],(err, results)=>{
        if(!err){
            return res.status(200).json({message:"Patient added successfully"})
        }
        else
        return res.status(500).json(err);
    });
});

router.get('/search', (req, res, next)=>{
    var query = "select *from Patient";
    connection.query(query,(err, results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/update/:patientId',(req,res, next)=> {
    const patientId = req.params.patientId;
    let patient = req.body;
    var query = "update Patient set name=?,dob=?,gender=?,phone_number=?,date_created=? where patientId=?";
    connection.query(query, [patient.name,patient.dob,patient.gender,patient.phone_number,patient.date_created,patientId],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Patient id is not found"});
            }
            return res.status(200).json({messge:"Patient updated successfully"});
        }
        else {
            return res.status(500).json(err);
        }
    });
});

router.delete('/delete/:patientId',(req,res,next)=>{
    const patientId = req.params.patientId;
    var query="delete from Patient where patientId=?";
    connection.query(query,[patientId],(err,results)=>{
        if(!err){
            if (results.affectedRows == 0){
                return res.status(404).json({message:"Patient id is not found"});
            }
            return res.status(200).json({message:"Patient deleted successfully"});

        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;
