import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Spacer } from "@app/components/shared";

export const Insurance = () => {
	return (
		<View>
			<AppText.Title>Ensuring you're insured.</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>You'll need to upload your insurance details before you can hire equipment.</AppText.Body>
		</View>
	);
};

const styles = StyleSheet.create({});
