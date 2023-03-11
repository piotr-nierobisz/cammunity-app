import React from "react";
import { Text } from "react-native";
import MainStackNavigator from "./SignedOutNavigation/MainStackNavigator";

interface LocalProps {
	verificationToken: string | null;
}
const RootNavigation: React.FC<LocalProps> = ({ verificationToken = null }) => {
	return <MainStackNavigator />;
};

export default RootNavigation;
