import React from 'react';
import ContextFactory from './ContextFactory';
import { UserType, UserContextType } from '@app/constants/Types';

interface Props {
  children: React.ReactNode;
}

const [useUserContext, UserVerificationContext] = ContextFactory<UserContextType>();
export default useUserContext;

export function UserProvider({ children }: Props): JSX.Element {
  const [verificationToken, setVerificationToken] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [secondName, setSecondName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const setUser = React.useCallback((verificationToken: string): void => {
    //  TODO: Take verification token and query the backend for more info
  }, []);

  const user: UserType = React.useMemo(() => ({
    verificationToken,
    username,
    firstName,
    secondName,
    email,
    isVerified: verificationToken!==null || verificationToken!==""
  }), [verificationToken, username, firstName, secondName, email]);
  
  const consumerPayload: UserContextType = {
    user,
    setUser
  };

  return (
    <UserVerificationContext value={consumerPayload}>
      {children}
    </UserVerificationContext>
  );
};