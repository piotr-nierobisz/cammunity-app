import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppText } from "@app/components/shared";
import { FeatureCardType } from "@app/constants";

interface LocalProps {
	width?: number | string;
	data: FeatureCardType;
}

export const FeatureCard: React.FC<LocalProps> = ({ width = "100%", data }) => {
	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={data.icon}
				style={[styles.icon]}
				resizeMode='contain'
			/>
			<AppText.SubTitle style={[styles.title]}>{data.title}</AppText.SubTitle>
			<AppText.Body style={[styles.body]}>{data.description}</AppText.Body>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	icon: {
		width: 78,
		height: 78,
		alignSelf: "center",
	},
	title: {
		textAlign: "center",
		marginBottom: 10,
		marginTop: 20,
	},
	body: {
		textAlign: "center",
	},
});
