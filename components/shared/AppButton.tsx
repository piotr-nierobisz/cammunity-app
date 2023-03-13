import React, { FC } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Colours } from "@app/constants";

interface AppButtonType {
	onPress: () => void;
	title: string;
	style?: StyleProp<ViewStyle>;
}

interface AppIconType {
	onPress: () => void;
	children: React.ReactElement | string;
	style?: StyleProp<ViewStyle>;
}

const { WHITE, BUTTON_BG } = Colours.APP;

export const AppButton: FC<AppButtonType> = ({ onPress, title = "Save", style, ...props }) => {
	return (
		<View style={{ alignItems: "center" }}>
			<Pressable
				{...props}
				style={[styles.button, style]}
				onPress={onPress}
			>
				<Text style={styles.text}>{title}</Text>
				<Feather
					name='arrow-right'
					size={20}
					color={WHITE}
					style={{ marginLeft: 10 }}
				/>
			</Pressable>
		</View>
	);
};

export const IconButton: FC<AppIconType> = ({ style, onPress, children, ...props }) => {
	return (
		<Pressable
			{...props}
			style={[styles.iconBtn, style]}
			onPress={onPress}
		>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 8,
		height: 40,
		paddingHorizontal: 30,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: BUTTON_BG,
	},
	text: {
		fontSize: 14,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: WHITE,
	},
	iconBtn: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 0,
		paddingHorizontal: 0,
		width: 40,
		height: 40,
		borderRadius: 40,
		backgroundColor: WHITE,
	},
	iconText: {
		fontSize: 18,
		fontWeight: "bold",
		letterSpacing: 0.25,
	},
});
