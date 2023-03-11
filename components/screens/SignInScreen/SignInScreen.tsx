import React from "react";
import { Text } from "react-native";
import { ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";

interface LocalProps extends ScreenProps {}

export const SignInScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<Text>SignInScreen</Text>
		</AppLayout>
	);
};
