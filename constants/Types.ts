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

export interface Camera {
	id: string;
	image: any;
	title: string;
}
export interface FeatureCardType {
	icon: any;
	title: string;
	description: string;
}
export interface AuthContextType {
  signIn: {(): void},
  signOut: {(): void},
  signUp: {(): void},
  hasVerified: boolean,
}
export interface AuthStateType {
  isLoading: boolean;
  isSignout: boolean;
  verificationToken: string|null;
}
export interface AuthStepStateType {
  isLoading: boolean;
  isSignout: boolean;
  verificationToken: string|null;
}

export interface UserContextType {
  user: UserType;
  setUser: { (verificationToken: string): void }
}
