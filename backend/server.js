import express from 'express';
import { adminRegister } from './controllers/adminRegister.js';
import mongoose from 'mongoose';
import { adminSignin } from './controllers/adminSignin.js';
import {employeeSignin} from './controllers/employeeSignin.js'
import {createTask} from './controllers/createTask.js'
// import bodyParser from 'body-parser';
import {fetchTask} from './controllers/fetchTask.js'
import {createEmployee} from './controllers/createEmployee.js'

const app = express();
app.use(express.json());
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
app.get('/tasks',fetchTask) ; 
app.post('/createemployee',createEmployee);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
