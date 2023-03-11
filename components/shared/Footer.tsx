import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FancyBorder } from "./FancyBorder";
import { AppText } from "./AppText";
import { Colours, Globals } from "@app/constants";
import { Spacer } from "./Spacer";

interface MenuOption {
	title: string;
	routes: {
		title: string;
		onPress: () => void;
	}[];
}

const { WHITE, TEXT_PRIMARY } = Colours.APP;
const { HOW_IT_WORKS, PRIVACY_POLICY, ABOUT_US, FAQ, CONTACT, TERMS_OF_SERVICE, CSR } = Globals.SCREENS.LOGGED_OUT;

export const Footer = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const menuOptions: MenuOption[] = [
		{
			title: "About us",
			routes: [
				{
					title: "How it works",
					onPress: () => handleOnPress(HOW_IT_WORKS),
				},
				{
					title: "About Us",
					onPress: () => handleOnPress(ABOUT_US),
				},
				{
					title: "FAQs",
					onPress: () => handleOnPress(FAQ),
				},
				{
					title: "Contact",
					onPress: () => handleOnPress(CONTACT),
				},
			],
		},

		{
			title: "Terms",
			routes: [
				{
					title: "Privacy Policy",
					onPress: () => handleOnPress(PRIVACY_POLICY),
				},
				{
					title: "Terms of Service",
					onPress: () => handleOnPress(TERMS_OF_SERVICE),
				},
				{
					title: "CSR",
					onPress: () => handleOnPress(CSR),
				},
			],
		},
	];

	const handleOnPress = (link: string) => {
		navigation.navigate(link);
	};

	return (
		<View>
			<FancyBorder />
			<View style={styles.root}>
				{menuOptions.map((i, index) => (
					<View
						key={index}
						style={{ alignItems: "center", marginHorizontal: 15 }}
					>
						<AppText style={{ fontWeight: "500", fontSize: 13 }}>{i.title}</AppText>
						<Spacer size={10} />
						{i.routes.map((i2, index2) => (
							<Pressable
								key={index2}
								onPress={i2.onPress}
								style={{ marginBottom: 4, paddingVertical: 5, width: '100%', alignItems: 'center'  }}
							>
								<AppText style={{ color: TEXT_PRIMARY, fontSize: 11 }}>{i2.title}</AppText>
							</Pressable>
						))}
					</View>
				))}
			</View>
			<FancyBorder />
			<View style={styles.copyRight}>
				<AppText> Copyright Cammunity 2023</AppText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		width: "100%",
		backgroundColor: WHITE,
		justifyContent: "center",
		padding: 15,
		flexDirection: "row",
	},
	logo: {
		width: 109.72,
	},
	copyRight: {
		height: 35,
		alignItems: "center",
		justifyContent: "center",
	},
});
