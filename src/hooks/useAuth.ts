// useAuth.ts
import { GetTokenSilentlyOptions, useAuth0 } from '@auth0/auth0-react';

export const useAuth = () => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
    loginWithPopup,
  } = useAuth0();

  const login = () => loginWithRedirect();

  const getToken = async (options?: GetTokenSilentlyOptions) => {
    return await getAccessTokenSilently(options);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    getToken,
    loginWithPopup
  };
}