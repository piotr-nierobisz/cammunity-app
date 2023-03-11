import React, { useRef, useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, SafeAreaView, Animated, Easing, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { List } from "react-native-paper";
import * as Linking from "expo-linking";

import { Colours, Globals } from "@app/constants";
import { FancyBorder } from "./FancyBorder";
import { Spacer } from "./Spacer";
import { AppText } from "./AppText";

const { WHITE, PRIMARY, BLACK, FACEBOOK, LINKEDIN, YOUTUBE } = Colours.APP;

interface ItemSectionProps {
	title: string;
	description?: string;
	onPress?: () => void;
	arrowRight?: boolean;
	iconLeft?: string;
	bg?: string;
}

interface MenuOption {
	title: string;
	onPress: () => void;
}

const { SIGN_IN, CONTACT, ABOUT_US } = Globals.SCREENS.LOGGED_OUT;

export const PopupMenu = () => {
	const navigation = useNavigation() as any;

	const [visible, setVisible] = useState(false);
	const scale = useRef(new Animated.Value(0)).current;

	const menuOptions: MenuOption[] = [
		{
			title: "Account",
			onPress: () => handleOnPress(SIGN_IN),
		},
		{
			title: "Messages",
			onPress: () => handleOnPress(SIGN_IN),
		},
		{
			title: "Bookings",
			onPress: () => handleOnPress(SIGN_IN),
		},
	];

	const socials: { icon: string; iconColor: string; onPress: () => void }[] = [
		{
			icon: "facebook",
			iconColor: FACEBOOK,
			onPress: () => Linking.openURL("https://www.facebook.com"),
		},
		{
			icon: "instagram",
			iconColor: BLACK,
			onPress: () => Linking.openURL("http://instagram.com"),
		},
		{
			icon: "linkedin",
			iconColor: LINKEDIN,
			onPress: () => Linking.openURL("http://linkedin.com"),
		},
		{
			icon: "youtube",
			iconColor: YOUTUBE,
			onPress: () => Linking.openURL("http://youtube.com"),
		},
	];

	const routes: MenuOption[] = [
		{
			title: "Help / Contact",
			onPress: () => handleOnPress(CONTACT),
		},
		{
			title: "About Us",
			onPress: () => handleOnPress(ABOUT_US),
		},
		{
			title: "Log Out",
			onPress: () => handleLogout(),
		},
	];

	const handleOnPress = (link: string) => {
		navigation.navigate(link);
	};

	const handleLogout = () => {};

	const handleClose = () => {
		setTimeout(() => {
			setVisible(false);
		}, 200);
	};

	React.useEffect(() => {
		if (visible) {
			Animated.timing(scale, {
				toValue: 0,
				duration: 500,
				useNativeDriver: false,
				easing: Easing.elastic(1.2),
			}).start();
		} else {
			Animated.timing(scale, {
				toValue: 300,
				duration: 500,
				useNativeDriver: false,
				easing: Easing.elastic(1.2),
			}).start();
		}
	}, [visible]);

	return (
		<>
			<TouchableOpacity onPress={() => setVisible(true)}>
				{visible ? (
					<AntDesign
						name='close'
						size={24}
						color={PRIMARY}
					/>
				) : (
					<Feather
						name='menu'
						size={24}
						color={BLACK}
					/>
				)}
			</TouchableOpacity>
			<Modal
				transparent
				visible={visible}
			>
				<SafeAreaView
					style={[styles.bg]}
					onTouchStart={handleClose}
				>
					<Animated.View
						style={[
							styles.menuCon,
							{
								transform: [
									{
										translateX: scale,
									},
								],
							},
						]}
					>
						{menuOptions.map((item, index) => (
							<ItemSection
								key={index}
								title={item.title}
								onPress={item.onPress}
							/>
						))}
						<Spacer />
						<FancyBorder />
						<Spacer size={40} />
						<View style={{ alignItems: "center", flex: 1, width: "100%" }}>
							{routes.map((i, index) => (
								<Pressable
									onPress={i.onPress}
									key={index}
									style={{ marginBottom: 4, padding: 10 }}
								>
									<AppText>{i.title}</AppText>
								</Pressable>
							))}
						</View>

						<Spacer size={50} />
						<View style={{ alignItems: "center", paddingHorizontal: 15 }}>
							<AppText style={{ fontSize: 12, marginBottom: 8 }}>Follow us</AppText>
							<View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", width: "100%" }}>
								{socials.map((i, index) => (
									<FontAwesome5
										style={{ padding: 10 }}
										key={index}
										name={i.icon}
										size={26}
										color={i.iconColor}
									/>
								))}
							</View>
						</View>
					</Animated.View>
				</SafeAreaView>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	bg: {
		flex: 1,
		backgroundColor: "transparent",
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	menuCon: {
		backgroundColor: WHITE,
		width: 256,
		height: "60%",
		marginTop: 64,
		marginRight: 5,
		borderRadius: 10,
		paddingTop: 15,
		paddingBottom: 20,
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 5,
	},
	itemTitle: {
		fontWeight: "500",
		fontSize: 14,
		lineHeight: 18,
	},
});

const ItemSection: React.FC<ItemSectionProps> = ({ title, onPress, bg = WHITE }) => {
	return (
		<List.Item
			onPress={onPress}
			title={title}
			titleStyle={styles.itemTitle}
			style={{ paddingVertical: 0, paddingHorizontal: 10 }}
			left={() => (
				<Feather
					name='link'
					size={24}
					color={PRIMARY}
				/>
			)}
		/>
	);
};
