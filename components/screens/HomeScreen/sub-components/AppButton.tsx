import React, { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface AppButtonType {
	onPress: () => void;
	title: string;
}

export const AppButton: FC<AppButtonType> = (props) => {
	const { onPress, title = "Save" } = props;
	return (
		<Pressable
			style={styles.button}
			onPress={onPress}
		>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
};

export const IconButton: FC<AppButtonType> = (props) => {
	const { onPress, title = "Save" } = props;
	return (
		<Pressable
			style={styles.iconBtn}
			onPress={onPress}
		>
			<Text style={styles.iconText}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 8,
		paddingHorizontal: 20,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "#111111",
	},
	text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},

	iconBtn: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 0,
		paddingHorizontal: 0,
		width: 40,
		height: 60,
	},

	iconText: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 0.25,
	},
});
