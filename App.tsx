import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "@app/components/navigations/RootNavigation";
import { Provider } from "react-native-paper";

import { Globals } from "./constants";

export default function App() {
	const [verificationToken, setVerificationToken] = React.useState<string | null>(null);
	return (
		<Provider theme={Globals.THEME.PAPER}>
			<NavigationContainer>
				<RootNavigation verificationToken={verificationToken} />
			</NavigationContainer>
		</Provider>
	);
}
