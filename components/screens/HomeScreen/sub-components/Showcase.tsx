import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FancyBorder } from "@app/components/shared";

const img = require("@assets/girl-cam.jpeg");

export const Showcase = () => {
	return (
		<>
			<View style={styles.con}>
				<Image
					source={img}
					style={styles.bg}
					resizeMode='cover'
				/>
				<View style={styles.overlay}>
					<Text style={styles.title}>Equipment</Text>
					<Text style={styles.subtitle}>Rent what you need,</Text>
					<Text style={styles.subtitle}>Lend what you dont</Text>
				</View>
			</View>
		<FancyBorder />
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: "700",
		fontSize: 45,
		color: "#fff",
		marginBottom: 15,
		textShadowColor: "#000",
		textShadowRadius: 10,
	},
	subtitle: {
		fontWeight: "400",
		fontSize: 20,
		color: "#fff",
		textShadowColor: "#000",
		textShadowRadius: 10,
	},
	con: {
		height: 270,
		width: "100%",
		backgroundColor: "yellow",
		overflow: "hidden",
		position: "relative",
	},
	bg: {
		height: "100%",
		resizeMode: "cover",
		width: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0,0,0,0.6)",
		justifyContent: "center",
		paddingHorizontal: 30,
	},
});
