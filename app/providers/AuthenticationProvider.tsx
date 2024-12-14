import { Auth0Provider } from "react-native-auth0";

type InputProps = {
  children: React.ReactNode;
};

const AuthenticationProvider = ({ children }: InputProps) => {
  const authDomain = process.env.EXPO_PUBLIC_AUTH0_DOMAIN ?? "";
  const auth0ClientId = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID ?? "";

  return (
    <Auth0Provider domain={authDomain} clientId={auth0ClientId}>
      {children}
    </Auth0Provider>
  );
};

export { AuthenticationProvider };
