import axiosInstance from "../config/axios"

const getEmployeeDetails = async () => {
	try {
		const response = await axiosInstance.get('employees');
		console.log("Response -", response);
		return response.data.data;
	} catch(err) {
		console.log("Error getting employee details -", err);
	}
}

const createEmployee = async (employeeData) => {
	try {
		const response = await axiosInstance.post('create', {
			...employeeData,
		});
		console.log("Response -", response.data);
		return response.data.data;
	} catch (err) {
		console.log("Error creating employee -", err);
	}
}

export {
	getEmployeeDetails,
	createEmployee,
}