const getAllEmployees = async (req, res) => {
    try {
        const employees = await db.Employee.findAll({
            attributes: ['id', 'email'],
            order: [['id', 'DESC']],
        });

        //validar depois 

        return res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getIdEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await db.Employee.findOne({ where: { id: employeeId } });

        //validar depois

        return res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createEmployee = async (req, res) => {
    try {
        const { email, password } = req.body;


        //validar depois
        const [createdEmployee, isCreated] = await db.Employee.findOrCreate({
            where: { email },
            defaults: { email, password },
        });

        if (!isCreated) {
            return res.status(400).json({ message: 'Email Already Exists' });
        }

        return res.status(201).json({ message: 'Employee Registered Successfully', data: createdEmployee });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const editEmployee = async (req, res) => {
    try {
        const { id, email, password } = req.body;

        // validar depois

        await db.Employee.update(
            { email, password: (password) }, //hashpassword
            { where: { id } }
        );

        return res.status(200).json({ message: 'Employee Updated Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;

        const deletedCount = await db.Employee.destroy({ where: { id: employeeId } });

        if (deletedCount === 0) {
            return res.status(404).json({ message: 'Employee Not Found' });
        }

        return res.status(200).json({ message: 'Employee Deleted Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllEmployees,
    getIdEmployee,
    createEmployee,
    editEmployee,
    deleteEmployee
}