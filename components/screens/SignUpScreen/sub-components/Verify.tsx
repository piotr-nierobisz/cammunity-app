import React from "react";
import { StyleSheet, View } from "react-native";

import { AppButton, AppInput, AppText, Spacer } from "@app/components/shared";
import { Colours } from "@app/constants";
interface LocalProps {
	onNext: () => void;
}
export const Verify: React.FC<LocalProps> = ({ onNext }) => {
	return (
		<View style={{ minHeight: 300 }}>
			<Spacer size={10} />
			<AppText.Body>
				Hello there, it's great that you found your way onto Cammunity. Before we go any further let's verify your email.
			</AppText.Body>
			<Spacer size={10} />
			<AppText.Body>We have sent a confirmation email to:</AppText.Body>
			<Spacer size={30} />
			<AppText.SubTitle style={{ textAlign: "center", color: Colours.APP.PRIMARY }}>johndoe4583@gmail.com</AppText.SubTitle>
			<Spacer size={30} />
			<AppInput
				label='Verification Code'
				placeholder='Enter Verification Code'
			/>

			<Spacer size={30} />
			<AppButton
				title='NEXT >>>'
				onPress={onNext}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
