import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText, Header, Spacer } from "@app/components/shared";
import { ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";

interface LocalProps extends ScreenProps {}

export const CsrScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<View style={styles.container}>
				<AppText.Title style={styles.title}>CORPORATE & SOCIAL RESPONSIBILITY</AppText.Title>
				<Spacer size={30} />

				<AppText.Body style={styles.subtitle}>
					We’re driven to facilitate a collaborative and sustainable platform where members can create without constraint.
				</AppText.Body>

				<AppText.Body style={styles.subtitle}>
					We’ve simplified our corporate values to represent exactly who we are. Those values are
					<AppText.SubTitle> Opportunity </AppText.SubTitle> and
					<AppText.SubTitle> Sustainability. </AppText.SubTitle>
				</AppText.Body>

				<Spacer />
				<AppText.SubTitle style={[styles.subtitle]}> Opportunity </AppText.SubTitle>
				<AppText.Body style={styles.subtitle}>
					Our platform helps creatives to find work and elevate themselves. We understand that creatives don't always start their
					career on an equal footing, and that gear is expensive.
				</AppText.Body>

				<AppText.Body style={styles.subtitle}>
					That’s why we endeavour to make it easier for members to rent quality equipment as affordably and effectively as
					possible. Members can also showcase their content and apply for work in an integrated platform, built for the community,
					by Cammunity.
				</AppText.Body>

				<Spacer />
				<AppText.SubTitle style={[styles.subtitle]}> Sustainability </AppText.SubTitle>
				<AppText.Body style={styles.subtitle}>
					With electrical equipment being the fastest growing waste in the UK, we’re motivated to reduce this through ensuring
					that unused gear is harnessed effectively... in the hands of another creator.
				</AppText.Body>
			</View>
		</AppLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		paddingVertical: 30,
	},
	title: {
		lineHeight: 28.15,
	},
	subtitle: {
		marginBottom: 10,
	},
});
