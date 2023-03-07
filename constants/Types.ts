import { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface UserType {
  verificationToken: string;
  username: string;
  firstName: string;
  secondName: string;
  email: string;
}

// Navigation
export interface Screen {
	name: string;
	component: any;
	options: NativeStackNavigationOptions;
}

export interface ScreenProps {
	navigation: NativeStackNavigationProp<any>;
}