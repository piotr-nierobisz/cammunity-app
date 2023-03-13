import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Animated, LayoutAnimation } from "react-native";
import { Feather } from "@expo/vector-icons";

import { TouchableRipple } from "react-native-paper";

import { AppText, FancyBorder, Spacer } from "@app/components/shared";
import { Colours, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { toggleAnimation } from "@app/components/animations";

const img = require("@assets/faq.png");

const { PRIMARY, WHITE, BLACK, BLACK_LIGHT } = Colours.APP;

const AnimatedItem: React.FC<{ item: { title: string; description: React.ReactElement | string } }> = ({ item }) => {
	const [visible, setVisible] = useState<boolean>(false);
	const animatedController = useRef(new Animated.Value(0)).current;
	const arrowTransform = animatedController.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "90deg"],
	});

	const toggleContent = () => {
		const config: Animated.TimingAnimationConfig = {
			duration: 100,
			toValue: visible ? 0 : 1,
			useNativeDriver: true,
		};
		Animated.timing(animatedController, config).start();
		LayoutAnimation.configureNext(toggleAnimation);
		setVisible(!visible);
	};

	return (
		<View style={{ marginBottom: 20 }}>
			<TouchableRipple
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					paddingVertical: 10,
					alignItems: "center",
					borderRadius: 10,
				}}
				onPress={() => toggleContent()}
			>
				<>
					<AppText style={{ fontWeight: "600" }}>{item.title}</AppText>
					<Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
						<Feather
							name='chevron-right'
							size={24}
							color='black'
						/>
					</Animated.View>
				</>
			</TouchableRipple>
			{visible && <>{item.description}</>}
		</View>
	);
};

interface LocalProps extends ScreenProps {}

interface MenuOption {
	title: string;
	routes: {
		title: string;
		onPress: () => void;
	}[];
}

// const menuOptions: MenuOption[] = [
// 	{
// 		title: "About us",
// 		routes: [
// 			{
// 				title: "How it works",
// 				onPress: () => handleOnPress(HOW_IT_WORKS),
// 			},
// 			{
// 				title: "About Us",
// 				onPress: () => handleOnPress(ABOUT_US),
// 			},
// 			{
// 				title: "FAQs",
// 				onPress: () => handleOnPress(FAQ),
// 			},
// 			{
// 				title: "Contact",
// 				onPress: () => handleOnPress(CONTACT),
// 			},
// 		],
// 	},

// 	{
// 		title: "Terms",
// 		routes: [
// 			{
// 				title: "Privacy Policy",
// 				onPress: () => handleOnPress(PRIVACY_POLICY),
// 			},
// 			{
// 				title: "Terms of Service",
// 				onPress: () => handleOnPress(TERMS_OF_SERVICE),
// 			},
// 			{
// 				title: "CSR",
// 				onPress: () => handleOnPress(CSR),
// 			},
// 		],
// 	},
// ];

const items: { title: string; faqs: { title: string; description: React.ReactElement | string }[] }[] = [
	{
		title: "Lenders",
		faqs: [
			{
				title: "What is my liability as a lender?",
				description: (
					<View>
						<AppText.Body>
							Lenders and Borrowers are also bound by any and all applicable terms and policies of the insurance provider or agent
							involved in the transaction between the Lender and the Borrower. We recommend that you read and understand any
							policy documents which may apply to a rental.
						</AppText.Body>
					</View>
				),
			},
			{
				title: "I don’t have insurance, can you help me?",
				description: (
					<View>
						<AppText.Body>
							For everything related to insurance, please <AppText.Body style={{ color: PRIMARY }}>Go here</AppText.Body>
						</AppText.Body>
					</View>
				),
			},
			{
				title: "What happens if I’m unable to meet the borrower in person?",
				description: <View></View>,
			},
			{
				title: "How secure is your booking process?",
				description: <View></View>,
			},
			{
				title: "My equipment is damaged or stolen. How can I report a borrower?",
				description: <View></View>,
			},
			{
				title: "How long can I list my equipment for?",
				description: <View></View>,
			},
			{
				title: "When will I receive my money?",
				description: <View></View>,
			},
			{
				title: "Does Cammunity take a cut of this payment?",
				description: <View></View>,
			},
		],
	},

	{
		title: "Borrowers",
		faqs: [
			{
				title: "What is my liability as a borrower?",
				description: <View></View>,
			},
			{
				title: "I’ve requested an item and would like to cancel, how do I do this?",
				description: <View></View>,
			},
			{
				title: "The listing price is too expensive, can I suggest a lower rate?",
				description: <View></View>,
			},
			{
				title: "There isn’t enough equipment in my local area, why is this?",
				description: <View></View>,
			},
			{
				title: "The product was faulty when I collected it, what can I do?",
				description: <View></View>,
			},
			{
				title: "Can I extend/ change the date of the rental return?",
				description: <View></View>,
			},
			{
				title: "What happens if I return the gear back too late?",
				description: <View></View>,
			},
			{
				title: "How can I leave a review?",
				description: <View></View>,
			},
			{
				title: "How can I report a lender?",
				description: <View></View>,
			},
			{
				title: "How do I change my payment details?",
				description: <View></View>,
			},
			{
				title: "How do I organise handovers and returns?",
				description: <View></View>,
			},
		],
	},

	{
		title: "Account",
		faqs: [
			{
				title: "How do I cancel my free trial?",
				description: <View></View>,
			},
			{
				title: "I would like to contest a negative review, how do I do this?",
				description: <View></View>,
			},
			{
				title: "I’m facing technical difficulties, how do I get in touch?",
				description: <View></View>,
			},
			{
				title: "My promo code doesn’t work?",
				description: <View></View>,
			},
			{
				title: "I can’t log into my account?",
				description: <View></View>,
			},
			{
				title: "All my bookings and messages have disappeared. Help!?",
				description: <View></View>,
			},
			{
				title: "I’d like to report a bug?",
				description: <View></View>,
			},
		],
	},
];
export const FaqsScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<View>
				<View style={styles.con}>
					<Image
						source={img}
						style={styles.bg}
						resizeMode='cover'
					/>
					<View style={styles.overlay}>
						<Text style={styles.title}>FAQs</Text>
						<AppText style={styles.subtitle}>Quick tips and insights for all our members.</AppText>
					</View>
				</View>
				<FancyBorder />
			</View>
			<Spacer size={30} />
			<View style={{ paddingHorizontal: 20 }}>
				{items.map((i) => (
					<View>
						<AppText.SubTitle>{i.title}</AppText.SubTitle>
						<Spacer />
						{i.faqs.map((faq, index) => (
							<AnimatedItem
								key={index}
								item={faq}
							/>
						))}
					</View>
				))}
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: "700",
		fontSize: 45,
		color: WHITE,
		marginBottom: 15,
		textShadowColor: BLACK,
		textShadowRadius: 10,
	},
	subtitle: {
		fontWeight: "400",
		fontSize: 20,
		color: WHITE,
		textShadowColor: BLACK,
		textShadowRadius: 10,
	},
	con: {
		height: 270,
		width: "100%",
		backgroundColor: "yellow",
		overflow: "hidden",
		position: "relative",
	},
	bg: {
		height: "100%",
		resizeMode: "cover",
		width: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: BLACK_LIGHT,
		justifyContent: "center",
		paddingHorizontal: 30,
	},
	animated_item1: {
		fontSize: 20,
		color: BLACK,
	},
	animated_item2: {
		textAlign: "left",
		marginTop: 10,
	},
});
