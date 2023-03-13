import React from "react";
import { Image } from "react-native";

const linearBg = require("@assets/line.png");

export const FancyBorder = () => {
	return (
		<Image
			source={linearBg}
			resizeMode='cover'
			style={{ height: 2.5, width: "100%" }}
		/>
	);
};
