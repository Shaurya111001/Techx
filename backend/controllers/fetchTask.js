import Employee from '../models/employeeModel.js';

export const fetchTask = (req, res) => {
  Employee.find({ email: req.body.email })
    .exec()
    .then(employee => {
      console.log(employee[0].tasks);
      if(employee[0].tasks.length === 0){
          return res.status(200).json({
              message:'No tasks'
          })
      }
      return res.status(200).json(
          {
            tasks:employee[0].tasks
          }
      )
    });
};
