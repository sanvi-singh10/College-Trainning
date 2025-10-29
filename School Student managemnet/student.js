const mongoose = require("mongoose");

const StudentSchema  = new mongoose.Schema ({
    id :{
        type : Number,
        required : true
    },

    name :{
        type : String,
        required : true
    },

    cgpa : {
        type : String,
        required : true
    }
} );

const Student = mongoose.model("Student", studentSchema);


export default Student;