import React from "react";

interface LocalProps {
	verificationToken: string | null;
}
const RootNav: React.FC<LocalProps> = ({ verificationToken }) => {
	const MainStackNavigator = React.lazy(() => import("./SignedOutNavigation/MainStackNavigator"));

	return <> {!verificationToken && <MainStackNavigator />} </>;
};

export default RootNav;
