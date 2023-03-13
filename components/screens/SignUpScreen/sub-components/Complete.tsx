import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppButton, AppText, Spacer } from "@app/components/shared";

interface LocalProps {
	onNext: () => void;
}

interface CardType {
	icon: any;
	description: React.ReactElement | string;
}

const comingSoons: CardType[] = [
	{
		icon: require("@assets/icon-avatar-2.png"),
		description: (
			<AppText.Body fontSize={12}>
				Seek work and provide jobs to members. Cammunity Premium enables you to scale the creative jobs market and find the
				opportunities you need.
				{"\n"} {"\n"}
				Why leave Cammunity to connect with the same members on other job boards?
			</AppText.Body>
		),
	},

	{
		icon: require("@assets/icon-phone-like.png"),
		description: (
			<AppText.Body fontSize={12}>
				Connect with professionals in your area to build your connections and opportunities. We hold networking events throughout
				the year and Cammunity Premium lets you gain access to these!
			</AppText.Body>
		),
	},

	{
		icon: require("@assets/icon-money.png"),
		description: (
			<AppText.Body fontSize={12}>
				Premium should mean prestige. Access a host of exciting monthly offers delivered through our industry partners. These are
				exclusive to our premium members, and include discounts, offers, exclusive contests and giveaways!
			</AppText.Body>
		),
	},
];

export const Card: React.FC<{ data: CardType }> = ({ data: { icon, description } }) => {
	return (
		<View style={[{ paddingVertical: 10, marginBottom: 20, flexDirection: "row" }]}>
			<Image
				source={icon}
				style={[styles.icon]}
				resizeMode='contain'
			/>
			<View style={{ marginLeft: 10, width: "75%" }}>{description}</View>
		</View>
	);
};

export const Complete: React.FC<LocalProps> = ({ onNext }) => {
	return (
		<View>
			<Spacer />
			<AppText.Title>Looking to network?</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>
				We're working hard to add features that will allow you to find work near you and list any jobs you have on offer, included
				at no extra cost with Cammunity Premium. We’ve also got some exclusive offers from our partners in the works, and
				unlimited access to networking events where you can meet and engage with the Cammunity!
			</AppText.Body>
			<Spacer size={30} />
			<View>
				<AppText.SubTitle>Coming soon...</AppText.SubTitle>
				<Spacer />
				{comingSoons.map((i, index) => (
					<Card
						key={index}
						data={i}
					/>
				))}
			</View>
			<Spacer size={30} />
			<AppButton
				title='Complete Sign up'
				onPress={onNext}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 78,
		height: 78,
		alignSelf: "center",
	},
});
