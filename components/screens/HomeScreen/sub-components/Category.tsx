import { StyleSheet, Text, View, Image, FlatList, Dimensions, Pressable } from "react-native";
import React, { FC } from "react";
import { IconButton } from "./AppButton";
import { AppText } from "@app/components/shared";
import { Colours } from "@app/constants";

const { width } = Dimensions.get("window");
const { PRIMARY, BLACK_LIGHT, WHITE } = Colours.APP;

interface Camera {
	id: string;
	image: any;
	title: string;
}

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

const Slide: FC<{ item: Camera }> = ({ item }) => {
	return (
		<View style={styles.slide}>
			<View style={styles.slideImgCon}>
				<Image
					source={item?.image}
					style={styles.bg}
					resizeMode='contain'
				/>
			</View>
			<Pressable style={styles.itemBtn}>
				<Text style={styles.slideTitle}>{item.title}</Text>
				<Text style={styles.slideBtnIcon}>{">"}</Text>
			</Pressable>
		</View>
	);
};

export const Category = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
	const ref = React.useRef() as any;

	const itemChanged = React.useRef(({ viewableItems }: any) => {
		setCurrentSlideIndex(viewableItems[0].index);
	}).current;

	const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 100 }).current;

	const next = () => {
		if (currentSlideIndex < cameraList.length - 1) {
			ref?.current.scrollToIndex({ index: currentSlideIndex + 1 });
		}
	};

	const prev = () => {
		if (currentSlideIndex > 0) {
			ref.current.scrollToIndex({ index: currentSlideIndex - 1 });
		} else {
			setCurrentSlideIndex(0);
		}
	};

	return (
		<View style={styles.con}>
			<AppText.Title style={styles.title}>Browse by category</AppText.Title>
			<AppText style={styles.subtitle}>Find equipment locally and affordably</AppText>

			<View style={styles.flatListCon}>
				<FlatList
					ref={ref}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					horizontal
					data={cameraList}
					keyExtractor={(item) => `${item.id}`}
					renderItem={({ item }) => <Slide item={item} />}
					onViewableItemsChanged={itemChanged}
					viewabilityConfig={viewConfig}
				/>
				<View style={styles.action1}>
					<IconButton
						onPress={prev}
						title='<'
					/>
				</View>
				<View style={styles.action2}>
					<IconButton
						onPress={next}
						title='>'
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		letterSpacing: 2,
		marginBottom: 10,
		marginHorizontal: 10,
	},
	subtitle: {
		marginBottom: 10,
		marginHorizontal: 10,
	},
	con: {
		paddingVertical: 10,
		flex: 1,
		backgroundColor: WHITE,
	},
	flatListCon: {
		position: "relative",
		justifyContent: "center",
	},
	imgCon: {
		height: 150,
		width: "100%",
		backgroundColor: "yellow",
		overflow: "hidden",
		position: "relative",
	},
	bg: {
		height: "100%",
		resizeMode: "cover",
		width: "100%",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: BLACK_LIGHT,
		justifyContent: "center",
		paddingHorizontal: 30,
	},
	action1: {
		position: "absolute",
		left: -5,
	},
	action2: {
		position: "absolute",
		right: -5,
	},
	slide: {
		width: width / 2.3,
		borderRadius: 10,
		marginRight: 10,
		marginLeft: 15,
		padding: 10,
	},
	slideImgCon: {
		width: "100%",
		height: 135,
		marginBottom: 5,
		padding: 5,
	},
	slideTitle: {
		fontWeight: "600",
		fontSize: 12,
	},
	slideBtnIcon: {
		color: PRIMARY,
		fontSize: 18,
		fontWeight: "600",
		marginLeft: 10,
		alignSelf: "center",
	},
	itemBtn: {
		flexDirection: "row",
		alignItems: "center",
	},
});
