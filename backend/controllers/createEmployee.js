import Admin from '../models/adminModel.js';
import Employee from '../models/employeeModel.js';

export const createEmployee = (req, res) => {
  Admin.findOneAndUpdate(
    { email: req.body.admin_email },
    {
      $push: {
        employees: {
          name: req.body.name,
          email: req.body.employee_email,
          designation: req.body.designation,
          contact: req.body.contact,
          password: req.body.password,
        },
      },
    }
  )
    .exec()
    .then(async (admin) => {
      const createinEmployeeDatabase = new Employee({
        name: req.body.name,
        email: req.body.employee_email,
        password: req.body.password,
        employeed_by:req.body.admin_email
      });

      await createinEmployeeDatabase.save();

        console.log(admin.employees)

      return res.status(200).json({
        message: 'employee created',
      });
    });
};
