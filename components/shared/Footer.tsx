import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export const Footer: React.FC<{ showBorder?: boolean }> = ({ showBorder = true }) => {
	const navigation = useNavigation() as any;

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

	function handleOnPress(link: string) {
		navigation.navigate(link);
	}

	return (
		<>
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
								style={{ marginBottom: 8 }}
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
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		height: 120,
		width: "100%",
		backgroundColor: WHITE,
		justifyContent: "center",
		paddingHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
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
