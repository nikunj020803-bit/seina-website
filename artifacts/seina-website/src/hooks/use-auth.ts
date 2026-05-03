import { useGetMe, setAuthTokenGetter } from "@workspace/api-client-react";

// Setup global auth token getter for API calls
setAuthTokenGetter(() => {
  return localStorage.getItem("seina_token");
});

export function useAuth() {
  const token = localStorage.getItem("seina_token");
  
  const { data: user, isLoading, error } = useGetMe({
    query: {
      enabled: !!token,
      retry: false,
    }
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    token,
  };
}

export function setAuthToken(token: string) {
  localStorage.setItem("seina_token", token);
}

export function removeAuthToken() {
  localStorage.removeItem("seina_token");
}
