import Employee from "../models/employeeModel.js" ;

export const employeeSignin = (req,res) => { 

    Employee.find({email:req.body.email})
    .exec().then(employee=>{
        if(employee.length <= 0){
            return res.status(401).json({
                message:'employee not exist, sign up first'
            })
        }
        if(req.body.password === employee[0].password){
            return res.status(200).json({
                message:'sign in successfully!!'
            })
        }
        if(req.body.password !== employee[0].password){
            return res.status(401).json({
                message:'Incorrect Password!!'
            })
        }
        else{
            return res.status(400) ;
        }
    })

}