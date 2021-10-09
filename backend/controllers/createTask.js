import Employee from '../models/employeeModel.js';

export const createTask = async (req, res) => {
  const task = req.body.task;

  try {
    Employee.findOneAndUpdate(
        { email : req.body.email }, 
        { $push: { tasks: task  } },
    ).exec().then(employee=>{
        return res.status(200).json({
            message:'task added'
        })
    })
  } catch (error) {
    console.log(error)
  }
};
