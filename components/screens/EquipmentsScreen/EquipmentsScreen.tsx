import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colours, Globals, ScreenProps } from "@app/constants";
import { AppText, Spacer } from "@app/components/shared";
import { AppLayout } from "@app/components/layouts";

interface LocalProps extends ScreenProps {}

const { SIGN_IN, CONTACT, ABOUT_US } = Globals.SCREENS.LOGGED_OUT;
const { LIGHT_GRAY_1 } = Colours.APP;

const img = require("@assets/girl-cam.jpeg");

export const Card: React.FC<any> = (): JSX.Element => {
	return (
		<View>
			<Image
				source={img}
				style={styles.bg}
				resizeMode='cover'
			/>
			<View style={{ padding: 10 }}>
				<AppText.SubTitle>Listing Name</AppText.SubTitle>
				<Spacer size={5} />
				<AppText.SubTitle>£100 day</AppText.SubTitle>
				<Spacer size={20} />
				<AppText>Posted by</AppText>
			</View>
		</View>
	);
};

export const EquipmentsScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<View style={[styles.map]}>
				<AppText.Body>Map...</AppText.Body>
			</View>
			<View style={[styles.con]}>
				<Card />
				<Spacer size={15} />
				<Card />
				<Spacer size={10} />
				<Card />
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 230,
		width: "100%",
		backgroundColor: LIGHT_GRAY_1,
		alignItems: "center",
		justifyContent: "center",
	},
	con: {
		padding: 15,
	},
	bg: {
		height: 190,
		resizeMode: "cover",
		width: "100%",
		borderRadius: 10,
	},
});
