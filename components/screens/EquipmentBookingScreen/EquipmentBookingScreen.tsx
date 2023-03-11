import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps } from "@app/constants";
import { Header } from "@app/components/shared";

interface LocalProps extends ScreenProps {}

export const EquipmentBookingScreen: React.FC<LocalProps> = (): JSX.Element => {
	return <Text>EquipmentBookingScreen</Text>;
};
