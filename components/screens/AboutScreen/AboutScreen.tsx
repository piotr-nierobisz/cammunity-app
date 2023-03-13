import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Spacer, AppButton } from "@app/components/shared";
import { Globals, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";

interface LocalProps extends ScreenProps {}

const { SIGN_UP } = Globals.SCREENS.LOGGED_OUT;

export const AboutScreen: React.FC<LocalProps> = ({ navigation }): JSX.Element => {
	return (
		<AppLayout>
			<View style={styles.container}>
				<AppText.Title>About Us</AppText.Title>
				<Spacer size={30} />
				<AppText.SubTitle>Who we are?</AppText.SubTitle>
				<Spacer />

				<AppText.Body>
					Cammunity is a growing team based in London. Our goal? To create opportunities and open doors for our members. We want
					to give you the tools you need to craft your content… so you can give the world more of the media we love.
				</AppText.Body>
				<Spacer />
				<AppText.Body>
					Whether you’re a camera operator in need of some equipment, a director who can’t quite find the right location, or a
					producer looking for some local crew to power your project - our platform is an integrated solution which can help.
				</AppText.Body>

				<Spacer />
				<AppText.Body>We want to become the go-to online resource for all your filming needs.</AppText.Body>

				<Spacer />
				<AppText.SubTitle>Why do we do it?</AppText.SubTitle>
				<AppText.Body>
					We believe that creatives everywhere should be able to fulfill their passion, unhindered by pricey equipment or trouble
					finding opportunities locally. That’s why we’re passionate about making the experience as easy as possible.
				</AppText.Body>
				<Spacer />
				<AppText.SubTitle>Why use us?</AppText.SubTitle>
				<Spacer />

				<AppText.SubTitle>We're specialists</AppText.SubTitle>
				<AppText.Body>
					Like you, our team comes from the creative sector; offering you dedicated support and industry-relevant features. We'll
					connect you to the right people, locations and jobs.
				</AppText.Body>
				<Spacer />

				<AppText.SubTitle>You save</AppText.SubTitle>
				<AppText.Body>
					Is your project balancing on a shoe-string budget? You can find more affordable gear and locations here! There’s even
					the potential to buy equipment outright.
				</AppText.Body>
				<Spacer />

				<AppText.SubTitle>We connect</AppText.SubTitle>
				<AppText.Body>
					Use our platform to connect and expand your team of creatives. Build your portfolio through pursuing exciting local
					jobs, and showcase your latest work.
				</AppText.Body>
				<Spacer />

				<AppText.SubTitle>You earn</AppText.SubTitle>
				<AppText.Body>
					Is your equipment or venue gathering dust? Make extra money by hiring it out! You can also sell any gear you don’t use
					anymore too.
				</AppText.Body>
				<Spacer />

				<AppText.SubTitle>We're sustainable</AppText.SubTitle>
				<AppText.Body>
					Electrical equipment is the UK’s fastest growing type of waste. Become a part of the Cammunity sharing economy so you
					can keep creativity green.
				</AppText.Body>
				<Spacer size={40} />

				<AppButton
					title='Sign up now'
					onPress={() => navigation.navigate(SIGN_UP)}
				/>
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 30,
	},

	subtitle: {
		marginBottom: 10,
	},
});
