import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import { AppText } from "./AppText";
import { Colours } from "@app/constants";

interface LocalProps extends TextInputProps {
	error?: string;
	label?: string;
	height?: number,
	marginBottom?: number

}
const { BLACK, INPUT_BORDER, DANDER, LIGHT_GRAY_2, WHITE } = Colours.APP;

export const AppInput = ({ style, error, label, height=60,marginBottom = 15, ...props }: LocalProps) => {
	return (
		<View style={{ marginBottom }}>
			{label ? <AppText.SubTitle style={styles.label}>{label}</AppText.SubTitle> : null }
			<View style={[styles.fieldView, { borderColor: error ? DANDER : INPUT_BORDER, height }]}>
				<TextInput
					{...props}
					placeholderTextColor={LIGHT_GRAY_2}
					style={[styles.textField, style]}
				/>
			</View>
			<Text style={styles.errorText}> {error} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textField: {
		fontSize: 16,
		fontWeight: "400",
		flex: 1,
		color: BLACK,
		paddingHorizontal: 10,
	},
	fieldView: {
		width: "100%",
		borderRadius: 5,
		marginTop: 5,
		borderWidth: 1,
		justifyContent: "center",
		backgroundColor: WHITE,
	},
	errorText: {
		fontSize: 12,
		color: DANDER,
		textAlign: "right",
	},
	label: {
		color: BLACK,
		marginBottom: 8
	},
});
