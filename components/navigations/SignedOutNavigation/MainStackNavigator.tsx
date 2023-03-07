import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Globals, Screen } from "@app/constants";
import { EquipmentsScreen, HomeScreen } from "@app/components/screens";

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
