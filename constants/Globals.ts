import { Dimensions, Platform } from "react-native";
import { DefaultTheme } from "react-native-paper";
import { Colours } from "./Colours";

export const Globals = Object.freeze({
	SCREENS: {
		LOGGED_OUT: {
			HOME: "Home",
			EQUIPMENTS: "Equipments",
			SINGLE_EQUIPMENT: "Single Equipment",
			EQUIPMENT_BOOKING: "Equipment Booking",
			HOW_IT_WORKS: `How is works`,
			ABOUT_US: "About us",
			FAQ: "FAQs",
			CONTACT: "Contact",
			PRIVACY_POLICY: "Privacy Policy",
			TERMS_OF_SERVICE: "Terms of Service",
			CSR: "CSR",
			SIGN_IN: "Sign In",
			SIGN_UP: "Sign Up",
		},
		LOGGED_IN: {
			ACCOUNT: "Account",
			PROFILE: "Profile",
			MESSAGES: "messages",
			BOOKINGS: "Bookings",
		},
	},
	THEME: {
		PAPER: {
			...DefaultTheme,
			roundness: 2,
			colors: {
				...DefaultTheme.colors,
				primary: Colours.APP.PRIMARY,
			},
		},
	},
	SIZES: {
		FULL_WIDTH: Dimensions.get("window").width,
		FULL_HEIGHT: Dimensions.get("window").height,
		IS_IOS: Platform.OS === "ios",
		IS_ANDROID: Platform.OS === "android",
	},
	AUTH_ACTIONS: {
    RESTORE: `RESTORE`,
    SIGN_IN: `SIGN_IN`,
    SIGN_OUT: `SIGN_OUT`,
  },
	KEYS: {
    STORAGE_VERIFICATION_KEY: `user-jwt`
  },
  BUTTONS: {
    LOGIN: `Login`,
    REGISTER: `Register`,
  },
  ERRORS: {
    UNABLE_TO_CREATE_CONTEXT: `Unfortunately we were unable to create any contexts. Please reset and try again`,
    MISSING_FONTS: `We were not able to load fonts, if this error persist please reinstall the app and contact suppport`,
    UNABLE_TO_ACCESS_STORAGE: `We were not able to access your app storage. Ensure all relevant permission has been enabled, and try again`,
  },
});
