import { StyleSheet } from "react-native"

const employeeStyle = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	createEmployeeContainer: {
		padding: 10,
		backgroundColor: '#cfcfcf'
	},
	employeeNameText: {
		fontSize: 20,
		color: 'rgba(0, 0, 0, 0.8)',
		fontWeight: '500',
	}
})

export default employeeStyle;