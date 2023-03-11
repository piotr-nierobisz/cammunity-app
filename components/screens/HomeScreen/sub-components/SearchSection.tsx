import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, TextInput, View } from "react-native";
// import { routes } from "@src/screens/routes";
import { AppButton } from "./AppButton";
import { Globals } from "@app/constants";

const { EQUIPMENTS } = Globals.SCREENS.LOGGED_OUT;

export const SearchSection = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
	const [product, setProduct] = React.useState("Product name");
	const [location, setLocation] = React.useState("London, UK");
	return (
		<View style={styles.con}>
			<TextInput
				style={styles.textInput}
				onChangeText={(text) => setProduct(text)}
				defaultValue={product}
				placeholder='Product name'
			/>

			<TextInput
				style={styles.textInput}
				onChangeText={(text) => setLocation(text)}
				defaultValue={location}
				placeholder='Location Uk'
			/>

			<AppButton
				title='Search ->'
				onPress={() => navigation.navigate(EQUIPMENTS)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	con: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
		alignItems: "center",
	},
	textInput: {
		height: 37,
		width: "60%",
		backgroundColor: "#fff",
		marginBottom: 15,
		paddingHorizontal: 20,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#B2B2B2",
	},
});
