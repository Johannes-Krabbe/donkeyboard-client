import { useEffect, useState } from "react";

export const useToken = () => {
  const tokenName = "donkey-token";

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem(tokenName));
  }, []);

  const saveToken = (token: string) => {
    localStorage.setItem(tokenName, token);
  };

  return {
    token,
    setToken: saveToken,
  };
};
