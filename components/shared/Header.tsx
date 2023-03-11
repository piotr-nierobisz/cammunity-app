import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Colours } from "@app/constants";
import { FancyBorder } from "./FancyBorder";
import { PopupMenu } from "./PopupMenu";

const logo = require("@assets/logo.png");
const { WHITE, LIGHT_GRAY_1 } = Colours.APP;

export const Header: React.FC<any> = () => {
	return (
		<>
			<StatusBar
				translucent={false}
				style='dark'
				backgroundColor={LIGHT_GRAY_1}
			/>
			<View style={styles.root}>
				<Image
					source={logo}
					style={styles.logo}
					resizeMode='contain'
				/>
				<PopupMenu />
			</View>
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
	popup: {
		flex: 1,
		zIndex: 200,
		position: "relative",
	},
	menuCon: {
		backgroundColor: "#fff",
		width: 256,
		height: 520,
		position: "absolute",
		right: 0,
		borderRadius: 10,
		padding: 20,

		shadowOffset: { width: -2, height: 4 },
		shadowColor: "#171717",
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
	},
});
