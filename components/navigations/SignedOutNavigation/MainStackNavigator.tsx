import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Globals, Screen } from "@app/constants";
import {
	EquipmentsScreen,
	HomeScreen,
	SingleEquipmentScreen,
	EquipmentBookingScreen,
	HowItWorksScreen,
	AboutScreen,
	FaqsScreen,
	ContactScreen,
	PrivacyPolicyScreen,
	TermsOfServiceScreen,
	SignUpScreen,
	SignInScreen,
} from "@app/components/screens";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
	const {
		HOME,
		EQUIPMENTS,
		SINGLE_EQUIPMENT,
		EQUIPMENT_BOOKING,
		HOW_IT_WORKS,
		ABOUT_US,
		FAQ,
		CONTACT,
		PRIVACY_POLICY,
		TERMS_OF_SERVICE,
		CSR,
		SIGN_IN,
		SIGN_UP,
	} = Globals.SCREENS.LOGGED_OUT;

	const navigation: Screen[] = [
		{
			name: HOME,
			component: HomeScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: EQUIPMENTS,
			component: EquipmentsScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: SINGLE_EQUIPMENT,
			component: SingleEquipmentScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: EQUIPMENT_BOOKING,
			component: EquipmentBookingScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: HOW_IT_WORKS,
			component: HowItWorksScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: ABOUT_US,
			component: AboutScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: FAQ,
			component: FaqsScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: CONTACT,
			component: ContactScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: PRIVACY_POLICY,
			component: PrivacyPolicyScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: TERMS_OF_SERVICE,
			component: TermsOfServiceScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: SIGN_UP,
			component: SignUpScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
		{
			name: SIGN_IN,
			component: SignInScreen,
			options: {
				headerShown: false,
				title: "",
			},
		},
	];

	return (
		<Stack.Navigator initialRouteName={HOME}>
			{navigation &&
				navigation.map((i) => (
					<Stack.Screen
						key={i.name}
						name={i.name}
						component={i.component}
						options={i.options}
					/>
				))}
		</Stack.Navigator>
	);
};

export default MainStackNavigator;
