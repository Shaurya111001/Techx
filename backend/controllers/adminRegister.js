import Admin from '../models/adminModel.js'

export const adminRegister = async(req,res) =>{

    try {

        const registerAdmin = new Admin({
            "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password
        })

        await registerAdmin.save() ; 
            
        res.status(200).json({
            "email":req.body.email,
            "message":'admin registered'
        })

    } catch (err) {
        res.status(400).send(err)
        console.log(err)
    }

}

