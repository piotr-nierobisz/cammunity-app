import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

interface LocalProps extends TextProps {
	children: string | any;
	fontSize?: number;
	color?: string;
}

export const AppText = ({ style, fontSize, color = "#000", ...props }: LocalProps) => {
	return (
		<Text
			{...props}
			style={[styles.text, { fontSize: fontSize ? fontSize : styles.text.fontSize, color }, style]}
		/>
	);
};

AppText.Title = ({ style, fontSize, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.title, { fontSize: fontSize ? fontSize : styles.title.fontSize }, style]}
		/>
	);
};

AppText.SubTitle = ({ style, fontSize, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.subTitle, { fontSize: fontSize ? fontSize : styles.subTitle.fontSize }, style]}
		/>
	);
};

AppText.Body = ({ style, fontSize, ...props }: LocalProps) => {
	return (
		<AppText
			{...props}
			style={[styles.body, { fontSize: fontSize ? fontSize : styles.body.fontSize }, style]}
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
		// lineHeight: 16.42,
		fontSize: 14,
	},
});
