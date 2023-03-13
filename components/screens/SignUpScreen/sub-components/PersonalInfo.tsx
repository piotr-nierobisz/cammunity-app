import { AppButton, AppCheckBox, AppInput, AppText, Spacer } from "@app/components/shared";
import { Colours } from "@app/constants";
import React from "react";
import { StyleSheet, View } from "react-native";

interface LocalProps {
	onNext: () => void;
}

export const PersonalInfo: React.FC<LocalProps> = ({ onNext }) => {
	return (
		<View>
			<AppInput
				label='First name'
				placeholder='Enter first name'
			/>

			<AppInput
				label='Last name'
				placeholder='Last name'
			/>

			<AppInput
				label='Date of Birth'
				placeholder='Enter Date of Birth'
			/>

			<AppInput
				label='Email'
				placeholder='Enter email'
			/>

			<AppInput
				label='Phone Number'
				placeholder='Enter phone number'
			/>

			<AppInput
				label='Username'
				placeholder='Enter Username'
			/>

			<AppInput
				label='Password'
				placeholder='Enter password'
			/>

			<AppInput
				label='Confirm Password'
				placeholder='Re-enter password'
			/>

			<AppCheckBox onCheck={() => {}}>
				<AppText.Body style={{ fontSize: 12 }}>
					I have read and agree to
					{"\n"}
					<AppText.Body style={{ color: Colours.APP.PRIMARY, fontSize: 12 }}>Cammunity’s Terms of Service</AppText.Body>
				</AppText.Body>
			</AppCheckBox>
			<Spacer size={20} />
			<AppCheckBox onCheck={() => {}}>
				<AppText.Body style={{ fontSize: 12, width: "60%" }}>
					I confirm that I am legally responsible for any items listed on this site
				</AppText.Body>
			</AppCheckBox>
			<Spacer size={30} />
			<AppButton
				title='NEXT'
				onPress={onNext}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
