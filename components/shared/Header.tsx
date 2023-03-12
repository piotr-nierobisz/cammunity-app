import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { Colours, Globals } from "@app/constants";
import { FancyBorder } from "./FancyBorder";
import { PopupMenu } from "./PopupMenu";

const logo = require("@assets/logo.png");


const { WHITE, LIGHT_GRAY_1 } = Colours.APP;
const { HOME  } = Globals.SCREENS.LOGGED_OUT;

export const Header: React.FC<any> = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	return (
		<>
			<StatusBar
				translucent={false}
				style='dark'
				backgroundColor={LIGHT_GRAY_1}
			/>
			<Pressable onPress={() => navigation.navigate(HOME)} style={styles.root}>
				<Image
					source={logo}
					style={styles.logo}
					resizeMode='contain'
				/>
				<PopupMenu />
			</Pressable>
			<FancyBorder />
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		height: 60,
		width: "100%",
		backgroundColor: WHITE,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		flexDirection: "row",
	},
	logo: {
		width: 109.72,
	},
});
