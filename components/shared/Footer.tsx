import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FancyBorder } from "./FancyBorder";
import { AppText } from "./AppText";
import { Colours } from "@app/constants";

const { WHITE } = Colours.APP;

export const Footer: React.FC<{ showBorder?: boolean }> = ({ showBorder = true }) => {
	return (
		<>
			<FancyBorder />
			<View style={styles.root}>
				<Text>Footer</Text>
			</View>
			<FancyBorder />
			<View style={styles.copyRight}>
				<AppText>Cammunity@2023</AppText>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		height: 120,
		width: "100%",
		backgroundColor: WHITE,
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	logo: {
		width: 109.72,
	},
	copyRight: {
		height: 35,
		alignItems: "center",
		justifyContent: 'center'
	},
});
