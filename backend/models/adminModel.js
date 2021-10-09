import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    employees:[
        {
            name:{type:String},
            email:{type:String,unique:true},
            designation:{type:String},
            contact:{type:String},
            password:{type:String,required:true}
        }
    ]
});

const Admin = new mongoose.model('Admin',adminSchema) ; 

export default Admin ; 