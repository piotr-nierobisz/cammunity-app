import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import React, { FC } from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const avatar = require("@assets/avatar.png");

import { AppText, IconButton, Spacer } from "@app/components/shared";
import { Camera, Colours, Globals } from "@app/constants";

const { PRIMARY, BLACK_LIGHT, WHITE, LIGHT_GRAY } = Colours.APP;
const {
	SIZES: { FULL_WIDTH },
} = Globals;

interface LocalProps {
	withRating?: boolean;
	items: Camera[];
	sectionTitle: string;
	sectionSubTitle: string;
}

const Slide: FC<{ item: Camera }> = ({ item }) => {
	return (
		<View style={styles.slide}>
			<View style={styles.slideImgCon}>
				<Image
					source={item?.image}
					style={styles.image}
					resizeMode='contain'
				/>
			</View>
			<Pressable style={styles.itemBtn}>
				<Text style={styles.slideTitle}>{item.title}</Text>
				<Feather
					style={styles.slideBtnIcon}
					name='chevron-right'
					size={24}
					color={PRIMARY}
				/>
			</Pressable>
		</View>
	);
};

const SlideWithRating: FC<{ item: Camera }> = ({ item }) => {
	return (
		<View style={styles.slide2}>
			<View style={styles.slideImgCon2}>
				<Image
					source={item?.image}
					style={styles.image2}
					resizeMode='contain'
				/>
			</View>
			<Spacer size={5} />
			<AppText.SubTitle style={{ fontSize: 12 }}>Canon R6</AppText.SubTitle>
			<Spacer />
			<View style={{ flexDirection: "row", alignItems: "center", width: FULL_WIDTH / 1.7 }}>
				<View style={{ flexDirection: "row", alignItems: "center", width: "50%" }}>
					<Image
						source={avatar}
						style={styles.userIcon}
						resizeMode='contain'
					/>
					<AppText fontSize={11}>Name of pers...</AppText>
				</View>

				<View style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}>
					<Entypo
						name='star'
						size={14}
						color={PRIMARY}
					/>
					<AppText
						fontSize={11}
						style={{ marginLeft: 4 }}
					>
						5
					</AppText>
					<AppText
						fontSize={11}
						style={{ marginLeft: 4, color: LIGHT_GRAY }}
					>
						{"(13)"}
					</AppText>
				</View>
			</View>
		</View>
	);
};

export const Category: FC<LocalProps> = (props) => {
	const { withRating = false, items, sectionSubTitle, sectionTitle } = props;
	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
	const ref = React.useRef() as any;

	const itemChanged = React.useRef(({ viewableItems }: any) => {
		setCurrentSlideIndex(viewableItems[0].index);
	}).current;

	const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 100 }).current;

	const next = () => {
		if (currentSlideIndex < items.length - 1) {
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
			<AppText.Title style={styles.title}>{sectionTitle}</AppText.Title>
			<AppText style={styles.subtitle}>{sectionSubTitle}</AppText>

			<View style={styles.flatListCon}>
				<FlatList
					ref={ref}
					bounces={false}
					showsHorizontalScrollIndicator={false}
					horizontal
					data={items}
					keyExtractor={(item) => `${item.id}`}
					renderItem={({ item }) => (withRating ? <SlideWithRating item={item} /> : <Slide item={item} />)}
					onViewableItemsChanged={itemChanged}
					viewabilityConfig={viewConfig}
				/>
				{!withRating && (
					<>
						<View style={styles.action1}>
							<IconButton
								onPress={prev}
								style={{ backgroundColor: "transparent" }}
							>
								<Feather
									name='chevron-left'
									size={24}
									color='black'
								/>
							</IconButton>
						</View>
						<View style={styles.action2}>
							<IconButton
								onPress={next}
								style={{ backgroundColor: "transparent" }}
							>
								<Feather
									name='chevron-right'
									size={24}
									color='black'
								/>
							</IconButton>
						</View>
					</>
				)}
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
		overflow: "hidden",
		position: "relative",
	},
	image: {
		height: "100%",
		resizeMode: "cover",
		width: "100%",
	},
	image2: {
		height: 120,
		resizeMode: "cover",
		width: 120,
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
		width: FULL_WIDTH / 2.3,
		borderRadius: 10,
		marginRight: 10,
		marginLeft: 15,
		padding: 10,
	},
	slide2: {
		width: FULL_WIDTH / 2,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	slideImgCon: {
		width: "100%",
		height: 135,
		marginBottom: 5,
		padding: 5,
		alignItems: "center",
	},
	slideImgCon2: {
		width: "100%",
		height: 100,
		marginBottom: 5,
		padding: 1,
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

	// user
	userIcon: {
		height: 20,
		resizeMode: "cover",
		width: 20,
		marginRight: 5,
	},
});
