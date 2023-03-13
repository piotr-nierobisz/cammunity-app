import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Spacer } from "@app/components/shared";

export const Complete = () => {
	return (
		<View>
			<AppText.Title>Looking to network?</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>
				We're working hard to add features that will allow you to find work near you and list any jobs you have on offer, included
				at no extra cost with Cammunity Premium. We’ve also got some exclusive offers from our partners in the works, and
				unlimited access to networking events where you can meet and engage with the Cammunity!
			</AppText.Body>
		</View>
	);
};

const styles = StyleSheet.create({});
