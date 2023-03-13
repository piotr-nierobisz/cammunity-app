import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { AppButton, AppText, Spacer } from "@app/components/shared";
import { Colours, FeatureCardType, Globals, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { FeatureCard } from "./sub-components";

const linearBg = require("@assets/bg-1.png");

interface LocalProps extends ScreenProps {}

const { WHITE } = Colours.APP;
const { SIGN_UP } = Globals.SCREENS.LOGGED_OUT;

const features: FeatureCardType[] = [
	{
		icon: require("@assets/icon-cam-location.png"),
		title: "Local, accessible equipment",
		description: "Avoid expensive hires and support local freelancers. Discover others in your area and borrow their equipment.",
	},
	{
		icon: require("@assets/icon-cash.png"),
		title: "Low-cost",
		description:
			"Professional equipment, made affordable. With Cammunity, lenders set their own price, and borrowers save money on the gear they want.",
	},
	{
		icon: require("@assets/icon-shield.png"),
		title: "Total peace of mind",
		description:
			"Camera and accessory insurance is available from our partners at photoGuard. If you already have cover from another provider, that’s cool too.",
	},
	{
		icon: require("@assets/icon-clock.png"),
		title: "Flexible pick-up & drop-off",
		description: "Arrange a time and location convenient to you both. Check your gear ahead of every exchange.",
	},
	{
		icon: require("@assets/icon-avatar-star.png"),
		title: "Verified Members",
		description: "With ID identification and live member-reviews, we ensure that our members are responsible and trustworthy.",
	},
	{
		icon: require("@assets/icon-message.png"),
		title: "Grow your network",
		description: "Discover and expand your network. Join a Cammunity who create exceptional things.",
	},
];

const howItWorks: { title: string; description: string }[] = [
	{
		title: "Find",
		description: "Borrowers can browse a catalogue of local equipment, and decide how long they need the gear.",
	},
	{
		title: "Pay",
		description:
			"Borrowers and Lenders get in touch through the platform and process payment securely. We ensure all members are verified.",
	},
	{
		title: "Meet",
		description: "Connect locally at a confirmed time and place to pick up the gear. A little networking never hurts!",
	},
	{
		title: "Create",
		description: "Borrowers can start creating amazing content with their gear!",
	},

	{
		title: "Return",
		description: "Borrowers return equipment and both members can review the experience.",
	},
];

export const HowItWorksScreen: React.FC<LocalProps> = ({ navigation }): JSX.Element => {
	return (
		<AppLayout>
			<View style={[styles.container, { marginTop: 30 }]}>
				<AppText.Title>Peer-to-peer lending for cameras.</AppText.Title>
				<Spacer size={30} />
				<AppText.SubTitle>Save on your next hire, or make money on that recent purchase.</AppText.SubTitle>
				<Spacer />
				<AppText.Body>
					Those looking to produce their project can do so affordably, and network locally through a reliable platform made for
					the industry, by the industry.
				</AppText.Body>
			</View>
			<Spacer size={40} />

			<AppText.Title style={{ textAlign: "center" }}>Secure & Simple</AppText.Title>
			<Spacer size={30} />
			<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
				{features.map((i, index) => (
					<View
						key={index}
						style={{ width: "50%", paddingHorizontal: 5, marginBottom: 30 }}
					>
						<FeatureCard data={i} />
					</View>
				))}
			</View>

			<ImageBackground
				source={linearBg}
				style={styles.image}
			>
				<View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
					<AppText.Title style={{ textAlign: "center" }}>How it works</AppText.Title>
					<Spacer size={30} />

					{howItWorks.map((i, index) => (
						<View
							key={index}
							style={styles.howItWorks}
						>
							<AppText.Title
								fontSize={48}
								style={{ lineHeight: 56 }}
								color={WHITE}
							>
								{index + 1}
							</AppText.Title>

							<View style={{ flex: 1, marginLeft: 20 }}>
								<AppText.SubTitle color={WHITE}>{i.title}</AppText.SubTitle>
								<AppText.SubTitle
									color={WHITE}
									fontSize={12}
								>
									{i.description}
								</AppText.SubTitle>
							</View>
						</View>
					))}
				</View>
			</ImageBackground>
			<View style={[styles.container, { marginVertical: 40 }]}>
				<AppButton
					title='Sign up now'
					onPress={() => navigation.navigate(SIGN_UP)}
				/>
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
	},

	subtitle: {
		marginBottom: 10,
	},

	howItWorks: {
		paddingVertical: 10,
		overflow: "hidden",
		width: "100%",
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
});
