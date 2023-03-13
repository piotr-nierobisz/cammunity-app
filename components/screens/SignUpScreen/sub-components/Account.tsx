import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppButton, AppInput, AppText, Spacer } from "@app/components/shared";

const avatar = require("@assets/avatar.png");

interface LocalProps {
	onNext: () => void;
}

export const Account: React.FC<LocalProps> = ({ onNext }) => {
	return (
		<View>
			<Spacer/>
			<AppText.Title>Welcome.</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>
				You're almost there. We have created an account for you so you will be able to login with the details you have given us.
				{"\n"} {"\n"}
				If you want your profile to stand out, add a profile picture and tell us little bit more about yourself. The address you
				give us is optional and it will speed up your checkout process if you decide to purchase from one of our users.
			</AppText.Body>

			<View style={{ marginTop: 30 }}>
				<AppText.SubTitle style={{ textAlign: "center" }}>Upload Profile Picture</AppText.SubTitle>
				<Image
					source={avatar}
					style={styles.userIcon}
					resizeMode='contain'
				/>
				<Spacer size={20} />

				<AppInput
					label='Bio'
					placeholder='Tell us something interesting about you or your work...'
					height={200}
					multiline={true}
					numberOfLines={4}
				/>

				<AppInput label='Address'
					placeholder='Address line 1.'
				/>
				<AppInput placeholder='Address line 2.' />
				<AppInput placeholder='Town / City' />
				<AppInput placeholder='Country' />
				<AppInput placeholder='Postcode' />
			</View>

			<Spacer size={30} />
			<AppButton
				title='NEXT'
				onPress={onNext}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	userIcon: {
		height: 96,
		// resizeMode: "cover",
		width: 96,
		alignSelf: "center",
		marginRight: 5,
	},
});
