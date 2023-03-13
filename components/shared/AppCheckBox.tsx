import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

interface LocalProps {
	onCheck: (value: boolean) => void;
	children: React.ReactElement | React.ReactElement[];
}
export const AppCheckBox: React.FC<LocalProps> = ({ onCheck, children }) => {
	const [checked, setChecked] = React.useState<boolean>(false);
	const handleToggle = () => {
		setChecked(!checked);
		onCheck(!checked);
	};
	return (
		<View style={{ alignItems: "flex-start", width: "auto" }}>
			<Pressable
				style={{ flexDirection: "row", alignItems: "center" }}
				onPress={handleToggle}
			>
				<>
					{checked ? (
						<AntDesign
							name='checksquare'
							size={24}
							color='black'
						/>
					) : (
						<MaterialCommunityIcons
							name='checkbox-blank-outline'
							size={24}
							color='black'
						/>
					)}
					<View style={{ marginLeft: 10 }}>{children}</View>
				</>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({});
