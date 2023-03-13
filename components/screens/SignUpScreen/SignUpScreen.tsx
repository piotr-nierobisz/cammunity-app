import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { AppButton, AppText, Spacer } from "@app/components/shared";
import { Colours, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { Account, Complete, Insurance, PersonalInfo, Verify } from "./sub-components";
import { TouchableRipple } from "react-native-paper";

const { PRIMARY, LIGHT_GRAY_1, WHITE } = Colours.APP;
interface LocalProps extends ScreenProps {}

interface Step {
	title: string;
	key: string;
	component: JSX.Element;
}

export const SignUpScreen: React.FC<LocalProps> = ({ navigation }): JSX.Element => {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [currentStep, setCurrentStep] = React.useState<Step | null>(null);

	const steps: Step[] = [
		{
			title: "Personal Info",
			key: "personal-info",
			component: <PersonalInfo />,
		},
		{
			title: "Verify",
			key: "verify",
			component: <Verify />,
		},
		{
			title: "Account",
			key: "account",
			component: <Account />,
		},
		{
			title: "Insurance",
			key: "insurance",
			component: <Insurance />,
		},
		{
			title: "Complete",
			key: "complete",
			component: <Complete />,
		},
	];

	const handleNext = () => {
		if (currentIndex + 1 !== steps.length) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex >= 1) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	React.useEffect(() => {
		const current = steps[currentIndex];
		setCurrentStep(current);
	}, [currentIndex]);

	return (
		<AppLayout>
			<View style={styles.container}>
				<AppText.Title style={styles.title}>Join the Cammunity</AppText.Title>
				<Spacer size={30} />
				<AppText.Body style={styles.subtitle}>
					Whether it’s a technical issue, feedback, a question not covered in our FAQs or just to tell us how much you’re enjoying
					the platform, get in touch with us below!
				</AppText.Body>
				<Spacer size={30} />
				<View style={{ flexDirection: "row", marginBottom: 30, width: "100%", justifyContent: "space-between" }}>
					{steps.map((i, index) => (
						<TouchableRipple
							key={index}
							onPress={() => setCurrentIndex(index)}
							style={styles.indicatorBox}
						>
							<>
								<View
									style={[
										styles.indicator,
										{
											borderColor: currentIndex === index ? PRIMARY : LIGHT_GRAY_1,
											backgroundColor: currentIndex === index ? WHITE : LIGHT_GRAY_1,
										},
									]}
								>
									<AppText style={{ fontSize: 11, textAlign: "center" }}>{index + 1}</AppText>
								</View>
								<AppText style={{ textAlign: "center", fontSize: 11, marginTop: 8 }}>{i.title}</AppText>
							</>
						</TouchableRipple>
					))}
				</View>

				<View style={{ minHeight: 300 }}>{currentStep?.component}</View>

				<View style={[styles.container, { marginTop: 40, alignItems: "center" }]}>
					<AppButton
						title='NEXT'
						onPress={handleNext}
					/>
					<Spacer />
					<Pressable
						onPress={handlePrev}
						style={{ padding: 10 }}
					>
						<AppText style={{ fontWeight: "600", color: "#7A7A7A" }}>Back</AppText>
					</Pressable>
				</View>
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

	//indicatorBox
	indicatorBox: {
		justifyContent: "center",
		alignItems: "center",
		width: "20%",
	},
	indicator: {
		height: 30,
		width: 30,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1.5,
		borderRadius: 30,
	},
});
