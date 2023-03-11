import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Footer, Header } from "@app/components/shared";
import { Colours, Globals } from "@app/constants";
import { ScrollView, View } from "react-native";

interface LocalProps {
	children: React.ReactElement | React.ReactElement[];
}

const { WHITE } = Colours.APP;
const { FULL_HEIGHT } = Globals.SIZES;

export const AppLayout: React.FC<LocalProps> = ({ children }): JSX.Element => {
	return (
		<SafeAreaProvider style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
				<Header />
				<ScrollView >
					<View style={{ minHeight: FULL_HEIGHT - 300  }}>{children}</View>
					<Footer />
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
