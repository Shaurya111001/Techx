import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  employeed_by:{
    type:String,
    required:true,
  },
  tasks:[String],
});

const Employee = new mongoose.model('Employee', employeeSchema);

export default Employee;
