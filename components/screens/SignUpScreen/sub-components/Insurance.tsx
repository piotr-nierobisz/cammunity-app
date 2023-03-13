import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { ProgressBar, TouchableRipple } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import { AppButton, AppText, Spacer } from "@app/components/shared";
import { Colours } from "@app/constants";

interface LocalProps {
	onNext: () => void;
}

interface UploadBoxType {
	title?: string;
	height?: string | number;
	onPress: () => void;
}
interface UploadedImageBoxType {
	fileName: string;
	progress: number;
}

const { LIGHT_GRAY_2, LIGHT_GRAY, WHITE } = Colours.APP;

export const UploadBox: React.FC<UploadBoxType> = ({ title = "Browse to upload", onPress, height = 216 }) => {
	return (
		<View style={{ alignItems: "center" }}>
			<TouchableRipple
				onPress={onPress}
				style={[styles.uploadBox, { height }]}
			>
				<>
					<AntDesign
						name='upload'
						size={50}
						color={LIGHT_GRAY_2}
					/>
					<AppText.SubTitle style={{ marginTop: 30, color: LIGHT_GRAY_2, fontSize: 18 }}>{title}</AppText.SubTitle>
				</>
			</TouchableRipple>
		</View>
	);
};

export const UploadedImageBox: React.FC<UploadedImageBoxType> = ({ fileName, progress }) => {
	return (
		<View style={[styles.uploadedFileBox, { borderColor: progress >= 1 ? LIGHT_GRAY_2  : "#fff" }]}>
			<AppText>{fileName}</AppText>
			<ProgressBar
				progress={progress}
				color='#36a87f'
				style={{
					borderRadius: 5,
					borderWidth: 1,
					borderColor: "#909090",
					backgroundColor: WHITE,
					height: 10,
					width: "100%",
					marginVertical: 10,
				}}
			/>
			<AppText.Body style={{ color: "#606060" }}>{progress >= 1 ? "Completed" : `${progress} complete`}</AppText.Body>
			{progress >= 1 && (
				<AntDesign
					style={{ position: "absolute", top: 10, right: 10 }}
					name='close'
					size={17}
				/>
			)}
		</View>
	);
};
export const Insurance: React.FC<LocalProps> = ({ onNext }) => {
	return (
		<View>
			<Spacer />
			<AppText.Title>Ensuring you're insured.</AppText.Title>
			<Spacer size={30} />
			<AppText.Body>You'll need to upload your insurance details before you can hire equipment.</AppText.Body>
			<Spacer size={40} />
			<UploadBox onPress={() => {}} />
			<Spacer size={30} />
			<UploadedImageBox fileName="Insurance 1.pdf" progress={1} />
			<UploadedImageBox fileName="Insurance 1.pdf" progress={0.6} />
	
			<View style={{ alignItems: "center" }}>
				<Pressable style={[styles.uploadBtn]}>
					<AntDesign
						name='upload'
						size={17}
						color={LIGHT_GRAY_2}
					/>
					<AppText style={{ marginLeft: 5, color: LIGHT_GRAY_2 }}>Complete Upload</AppText>
				</Pressable>
			</View>

			<Spacer size={40} />
			<AppButton
				title='Skip'
				onPress={onNext}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	uploadBox: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 10,
		borderStyle: "dashed",
		alignSelf: "center",
		borderColor: Colours.APP.LIGHT_GRAY_2,
		backgroundColor: Colours.APP.WHITE,
		alignItems: "center",
		justifyContent: "center",
	},
	uploadedFileBox: {
		width: "100%",
		height: 124,
		borderWidth: 1,
		borderRadius: 10,
		borderStyle: "dashed",
		borderColor: Colours.APP.LIGHT_GRAY_2,
		backgroundColor: Colours.APP.WHITE,
		justifyContent: "center",
		padding: 15,
		marginBottom: 20,
		position: "relative",
	},
	uploadBtn: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 8,
		height: 40,
		paddingHorizontal: 30,
		backgroundColor: "#E6E6E6",
		marginTop: 30,
		borderRadius: 5,
	},
});
