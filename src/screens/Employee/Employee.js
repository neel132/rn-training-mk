import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { createEmployee, getEmployeeDetails } from "../../api/employees";
import styles from './employee.style';
const Employee = () => {
	const [employees, setEmployeeData] = useState([]);
	useEffect(() => {
		employeeDetails();
	}, []);
	const employeeDetails = async () => {
		const employeeDetails = await getEmployeeDetails();
		console.log("Employee Details From Screen -", employeeDetails);
		setEmployeeData(employeeDetails);
	}
	const _renderItem = ({item}) => {
		return (
			<View style={styles.container}>
				<Text style={styles.employeeNameText}>{item.employee_name}</Text>
			</View>
		)
	}
	const FooterComponent = () => (
		<TouchableOpacity
			onPress={() => createEmployee({"name":"Test A","salary":"123456","age":"25"})}
			style={styles.createEmployeeContainer}
		>
			<Text>Create Employee</Text>
		</TouchableOpacity>
	)
	return (
		<FlatList
			data={employees}
			extraData={employees}
			renderItem={_renderItem}
			keyExtractor={(_, index) => String(index)}
			ListFooterComponent={<FooterComponent />}
		/>
	)
}
export default Employee;