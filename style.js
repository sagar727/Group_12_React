import { StyleSheet, Platform, StatusBar } from "react-native";

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
	},

	mainContainer:{
		flex:1,
		backgroundColor:"yellow",
		flexDirection:"column",
		justifyContent:"space-between",
		alignItems:"center",
		padding:10
	},

	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 5,
		flex: 1,
		marginRight: 10,
	},
	buttonContainer: {
		marginRight: 25,
	},
	separator: {
		height: 3,
		width: "95%",
		backgroundColor: "#CED0CE",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 0,
		marginLeft: 10,
	},

	deleteButton: {
		width: 26,
		height: 26,
		margin: 15,
	},
	title: { flex: 1, fontSize: 26, fontWeight: "bold" },
	flatListSpacing: { marginLeft: 10, marginRight: 10 },
});
export default style;
