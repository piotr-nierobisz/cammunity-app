import { Globals } from "@app/constants";
import { AuthStateType } from "../constants/Types";

interface ActionType {
  type: string;
  verificationToken: string|null;
}

const AuthReducer = (prevState: AuthStateType, {type, verificationToken}: ActionType): AuthStateType => {
  switch(type) {
    case Globals.AUTH_ACTIONS.RESTORE:
      return {
        ...prevState,
        verificationToken,
        isLoading: false
      };
    case Globals.AUTH_ACTIONS.SIGN_IN:
      return {
        ...prevState,
        verificationToken,
        isSignout: false,
      };
    case Globals.AUTH_ACTIONS.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        verificationToken: null
      }
  }
  return {
    isLoading: false,
    isSignout: false,
    verificationToken: null
  }
};

export default AuthReducer;