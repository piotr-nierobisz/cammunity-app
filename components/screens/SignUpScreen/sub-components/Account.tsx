import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Spacer } from "@app/components/shared";

export const Account = () => {
	return (
		<View>
			<AppText.Title>Welcome.</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>
				You're almost there. We have created an account for you so you will be able to login with the details you have given us.{" "}
				{"/n"}f you want your profile to stand out, add a profile picture and tell us little bit more about yourself. The address
				you give us is optional and it will speed up your checkout process if you decide to purchase from one of our users.
			</AppText.Body>
		</View>
	);
};

const styles = StyleSheet.create({});
