import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@app/components/shared";
import { ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";

interface LocalProps extends ScreenProps {}

export const AboutScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			
		</AppLayout>
	);
};
