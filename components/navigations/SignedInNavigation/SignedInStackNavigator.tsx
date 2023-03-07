import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Globals, Screen } from "@app/constants";
import { EquipmentsScreen, HomeScreen } from "@app/components/screens";


const Stack = createNativeStackNavigator();

const SignedInStackNavigator = () => {
  const { HOME, EQUIPMENTS } = Globals.SCREENS.LOGGED_OUT;

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
		<Stack.Navigator>
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

export default SignedInStackNavigator;
