import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// flexDirection: 'row',
		borderWidth: 1,
		zIndex: 99999 // It comes handy when you want to show one component above another if it is underneath
	},
	counterText: {
		fontSize: 24,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		paddingBottom: 10,
		// position: 'absolute',
		// top: 10,
		// left: 10,
		// right: 10,
		// bottom: 0,
	}
});

export default styles