import React from "react";
import { Camera, ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { Category, SearchSection, Showcase } from "./sub-components";
import { Spacer } from "@app/components/shared";

interface LocalProps extends ScreenProps {}

const cameraList: Camera[] = [
	{
		id: "1",
		image: require("@assets/cam-6.png"),
		title: "Hybrid Cameras",
	},
	{
		id: "2",
		image: require("@assets/cam-3.png"),
		title: "Cinema Lenses",
	},
	{
		id: "3",
		image: require("@assets/cam-2.png"),
		title: "Lights",
	},
	{
		id: "4",
		image: require("@assets/cam-5.png"),
		title: "Microphones",
	},
];

const cameraList2: Camera[] = [
	{
		id: "1",
		image: require("@assets/cam-6.png"),
		title: "Canon R6",
	},
	{
		id: "4",
		image: require("@assets/cam-5.png"),
		title: "Canon R9",
	},
	{
		id: "3",
		image: require("@assets/cam-2.png"),
		title: "Canon R8",
	},
	{
		id: "2",
		image: require("@assets/cam-3.png"),
		title: "Canon R7",
	},
];

export const HomeScreen: React.FC<LocalProps> = (): JSX.Element => {

	return (
		<AppLayout>
			<Showcase />
			<SearchSection />
			<Category
				sectionTitle='Browse by category'
				sectionSubTitle='Find equipment locally and affordably'
				items={cameraList}
			/>
			<Spacer size={40} />
			<Category
				sectionTitle='Recent listings'
				sectionSubTitle='Find the latest equipment near you'
				withRating
				items={cameraList2}
			/>
			<Spacer size={40} />
		</AppLayout>
	);
};
