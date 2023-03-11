import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

interface LocalProps extends TextProps {
	children: string;
}
export const AppText = (props: LocalProps) => {
	return <Text {...props} />;
};

const styles = StyleSheet.create({});
