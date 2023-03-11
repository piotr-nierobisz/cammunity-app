import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@app/components/shared";
import { ScreenProps } from "@app/constants";

interface LocalProps extends ScreenProps {}

export const TermsOfServiceScreen: React.FC<LocalProps> = (): JSX.Element => {
	return <Text>TermsOfServiceScreen</Text>;
};
