import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

interface LocalProps extends TextProps {
	children: string;
}
export const AppText = ({ style, ...props }: LocalProps) => {
	return (
		<Text
			{...props}
			style={[styles.text, style]}
		/>
	);
};

AppText.Title = ({ style, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.title, style]}
		/>
	);
};

AppText.SubTitle = ({ style, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.subTitle, style]}
		/>
	);
};

AppText.Body = ({ style, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.body, style]}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 13,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		lineHeight: 28,
	},
	subTitle: {
		fontSize: 16,
		fontWeight: "600",
		lineHeight: 19,
	},
	body: {
		fontWeight: "400",
		fontSize: 14,
	},
});
