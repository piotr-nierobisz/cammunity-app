import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Footer, Header } from "@app/components/shared";
import { Colours } from "@app/constants";
import { View } from "react-native";

interface LocalProps {
	children: React.ReactElement | React.ReactElement[];
}

const { WHITE } = Colours.APP;

export const AppLayout: React.FC<LocalProps> = ({ children }): JSX.Element => {
	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
				<Header />
				<View style={{ flex: 1 }}>{children}</View>
				<Footer />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
