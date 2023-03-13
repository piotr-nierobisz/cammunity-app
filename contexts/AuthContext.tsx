import React from 'react';
import ContextFactory from './ContextFactory';
import { AuthContextType } from '@app/constants/Types';
import AuthReducer from '@app/reducers/AuthReducer';
import { Globals } from '@app/constants';
// import VerificationApi from '../api/VerificationApi';

interface LocalProps {
  children: React.ReactNode;
}

const [useAuthControls, AuthContext] = ContextFactory<AuthContextType>();

export default useAuthControls;

export function AuthProvider({ children }: LocalProps): JSX.Element {

  const [state, dispatch] = React.useReducer(AuthReducer, {
    isLoading: true,
    isSignout: false,
    verificationToken: null,
  });

  const [hasVerified, setHasVerified] = React.useState<boolean>(false);

  const consumerPayload: AuthContextType = React.useMemo(() => ({
    signIn: (): void => {
      //  TODO: Update device memory with new user information
      // VerificationApi.checkToken()
      //   .then((result: boolean) => {
      //     setHasVerified(result)
      //   })
      //   .catch(({ message }) => {

      //   });
      // dispatch({ type: Globals.AUTH_ACTIONS.RESTORE, verificationToken: null });
    },
    signOut: (): void => {
      //  TODO: Clear momory and notify api about sign out
      setHasVerified( false );
      dispatch({ type: Globals.AUTH_ACTIONS.SIGN_OUT, verificationToken: null });
    },
    signUp: (): void => {
      // VerificationApi.checkToken()
      //   .then((result: boolean) => {
      //     setHasVerified(result)
      //   })
      //   .catch(({ message }: any) => {

      //   });
      // dispatch({ type: Globals.AUTH_ACTIONS.SIGN_IN, verificationToken: null });
    },
    hasVerified,
  }), [hasVerified]);

  return (
    <AuthContext value={consumerPayload}>
      {children}
    </AuthContext>
  );
};