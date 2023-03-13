import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { AppText, Spacer } from "@app/components/shared";
import { Colours, Globals, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { Account, Complete, Insurance, PersonalInfo, Verify } from "./sub-components";
import { TouchableRipple } from "react-native-paper";

interface LocalProps extends ScreenProps {}

interface Step {
	title: string;
	key: string;
	component: JSX.Element;
	valid: boolean;
}

const { PRIMARY, LIGHT_GRAY_1, WHITE, LIGHT_GRAY_2 } = Colours.APP;
const { HOME } = Globals.SCREENS.LOGGED_OUT;

export const SignUpScreen: React.FC<LocalProps> = ({ navigation }): JSX.Element => {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const [currentStep, setCurrentStep] = React.useState<Step | null>(null);

	let steps: Step[] = [
		{
			title: "Personal Info",
			key: "personal-info",
			component: <PersonalInfo onNext={() => handleNext()} />,
			valid: false,
		},
		{
			title: "Verify",
			key: "verify",
			component: <Verify onNext={() => handleNext()} />,
			valid: false,
		},
		{
			title: "Account",
			key: "account",
			component: <Account onNext={() => handleNext()} />,
			valid: false,
		},
		{
			title: "Insurance",
			key: "insurance",
			component: <Insurance onNext={() => handleNext()} />,
			valid: false,
		},
		{
			title: "Complete",
			key: "complete",
			component: <Complete onNext={() => handleComplete()} />,
			valid: false,
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
	const handleComplete = () => {
		navigation.navigate(HOME);
	};
	React.useEffect(() => {
		const current = steps[currentIndex];
		setCurrentStep(current);

		const newState = steps.map((obj, index) => {
			if (index === currentIndex) {
				return { ...obj, valid: true };
			}
			return obj;
		});

		steps = [...newState];
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
				<View
					style={{
						flexDirection: "row",
						marginBottom: 30,
						width: "100%",
						justifyContent: "space-between",
					}}
				>
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
											borderColor: currentIndex === index || i.valid ? PRIMARY : LIGHT_GRAY_1,
											backgroundColor: currentIndex === index || i.valid ? WHITE : LIGHT_GRAY_1,
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

				<View>{currentStep?.component}</View>

				<View style={[{ alignItems: "center", marginTop: 20 }]}>
					<Pressable
						onPress={handlePrev}
						style={{ padding: 10 }}
					>
						<AppText style={{ fontWeight: "600", color: LIGHT_GRAY_2 }}>Back</AppText>
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
