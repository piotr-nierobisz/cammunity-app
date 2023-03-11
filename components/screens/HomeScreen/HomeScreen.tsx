import React from "react";
import { ScreenProps } from "@app/constants";
import { AppLayout } from "@app/components/layouts";
import { Category, SearchSection, Showcase } from "./sub-components";

interface LocalProps extends ScreenProps {}

export const HomeScreen: React.FC<LocalProps> = (): JSX.Element => {
	return (
		<AppLayout>
			<Showcase />
			<SearchSection />
			<Category />
		</AppLayout>
	);
};
