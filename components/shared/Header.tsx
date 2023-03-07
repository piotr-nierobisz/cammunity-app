import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const logo = require("@assets/logo.png");
export const Header: React.FC<{ showBorder?: boolean }> = ({ showBorder = true }) => {
	return (
		<>
			<View style={styles.root}>
				<StatusBar
					translucent={true}
					style='dark'
					backgroundColor='#fff'
				/>
				<Image
					source={logo}
					style={styles.logo}
					resizeMode='contain'
				/>
			</View>
			{showBorder && (
				<LinearGradient
					start={[0, 0.5]}
					end={[1, 0.5]}
					colors={["#FDE047", "#FF4F01"]}
					style={{ height: 3 }}
				/>
			)}
		</>
	);
};


const styles = StyleSheet.create({
	root: {
		height: 60,
		width: "100%",
		backgroundColor: "#fff",
		justifyContent: "center",
		paddingHorizontal: 15,
	},
	logo: {
		width: 109.72,
	},
});
