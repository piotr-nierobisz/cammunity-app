import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Spacer } from "@app/components/shared";

export const Verify = () => {
	return (
		<View>
			<Spacer size={30} />
			<AppText.Body>
				Hello there, it's great that you found your way onto Cammunity. Before we go any further let's verify your email.
				{"/n"}
				We have sent a confirmation email to:
			</AppText.Body>
		</View>
	);
};

const styles = StyleSheet.create({});
