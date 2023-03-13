import React from "react";
import { Text, View } from "react-native";

import { ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { AppButton, AppInput, AppText, Spacer } from "@app/components/shared";

interface LocalProps extends ScreenProps {}

export const SignInScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
				<AppText.Title>Welcome.</AppText.Title>
				<Spacer size={30} />

				<AppInput
					label='Email'
					placeholder='Enter Email'
				/>

				<AppInput
					label='Password'
					placeholder='Enter Password'
				/>
				<Spacer size={40} />
				<AppButton
					title='Login'
					onPress={() => {}}
				/>
			</View>
		</AppLayout>
	);
};
