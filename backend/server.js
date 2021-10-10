import express from 'express';
import { adminRegister } from './controllers/adminRegister.js';
import mongoose from 'mongoose';
import { adminSignin } from './controllers/adminSignin.js';
import {employeeSignin} from './controllers/employeeSignin.js'
import {createTask} from './controllers/createTask.js'
// import bodyParser from 'body-parser';
import {fetchTask} from './controllers/fetchTask.js'
import {createEmployee} from './controllers/createEmployee.js'
import cors from 'cors'
import Admin from './models/adminModel.js';
import Employee from './models/employeeModel.js';

const app = express();
app.use(express.json());
app.use(cors()) ; 
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT || 9000;

export const connectdb = async() => {
  await mongoose
    .connect(
      'mongodb+srv://madhav:sJ8UqCKz6iVl6R1H@cluster0.methd.mongodb.net/Hackathon?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log('connection successful and db connected');
    })
    .catch((err) => {
      console.log(err);
    });
};

connectdb(); 

app.post('/adminregister', adminRegister);
app.post('/adminsignin',adminSignin) ; 
app.post('/employeesignin',employeeSignin) ; 
app.post('/createtask',createTask); 

app.get('/tasks/:email',(req,res)=>{
  Employee.findOne({ email: req.params.email })
  .exec()
  .then(employee => {
    console.log(employee);
    if(employee.tasks.length === 0){
        return res.status(202).json({
            message:'No tasks'
        })
    }
    return res.status(200).json(
        {
          tasks:employee.tasks
        }
    )
  });
}) ; 

app.post('/createemployee',createEmployee);

app.get('/getadmindetails/:email',(req,res)=>{
  Admin.findOne({email:req.params.email}).exec().then(admin=>{
    console.log(admin);
    res.json({
      data:admin
    }) 
})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
