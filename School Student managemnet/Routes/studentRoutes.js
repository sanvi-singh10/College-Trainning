const express = require("express");
const router = express.Router();
const Student = require("../student");


router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('students', async (req, res)=>{
    try{
        const student = new student(req.body);
        const saveStudent = await student.save();
        res.json("Saved Data");
    } catch(error) {
        res.json(`error : ${error.message}`);
    }
    
});

router.delete('/students', async(req, res) =>{
    try {
        
    } catch(error){

    }
})