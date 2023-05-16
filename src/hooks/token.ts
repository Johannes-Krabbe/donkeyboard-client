import { useEffect, useState } from "react";

export const useToken = () => {
  const tokenName = "donkey-token";

  const getToken = (): string => {
    let token;
    useEffect(() => {
      token = localStorage.getItem(tokenName);
    });
    return token ? token : "";
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    localStorage.setItem(tokenName, token);

    setToken(token);
  };

  return {
    token,
    setToken: saveToken,
  };
};
