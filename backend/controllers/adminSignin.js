import Admin from "../models/adminModel.js"

export const adminSignin = (req,res) => { 

    Admin.find({email:req.body.email})
    .exec().then(admin=>{
        if(admin.length < 0){
            return res.status(401).json({
                message:'admin not exist, sign up first'
            })
        }
        if(req.body.password === admin[0].password){
            return res.status(200).json({
                message:'sign in successfully!!'
            })
        }
        if(req.body.password !== admin[0].password){
            return res.status(401).json({
                message:'Incorrect Password!!'
            })
        }
        else{
            return res ;
        }
    })

} 