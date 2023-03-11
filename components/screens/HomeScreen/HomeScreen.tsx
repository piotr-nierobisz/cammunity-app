import React from "react";
import { Text } from "react-native";
import { Globals, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { Button } from "react-native-paper";

interface LocalProps extends ScreenProps {}

export const HomeScreen: React.FC<LocalProps> = ({ navigation }): JSX.Element => {
	const { SIGN_IN } = Globals.SCREENS.LOGGED_OUT;

	// React.useEffect(() => {
	// 	console.log("Link:");
	// }, []);

	return (
		<AppLayout>
			{/* <Button
				mode='contained'
				onPress={() => navigation.navigate(SIGN_IN)}
			>
				<Text> GO TO SOMEWHARE </Text>
			</Button> */}
			<Text>HomeScreen</Text>
		</AppLayout>
	);
};
