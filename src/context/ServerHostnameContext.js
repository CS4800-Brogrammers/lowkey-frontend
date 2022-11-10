import { createContext } from "react";

const ServerHostnameContext = createContext();

export default ServerHostnameContext;

export const ServerHostnameProvider = ({ children }) => {
  const serverUrl =
    window.location.hostname === "localhost"
      ? "127.0.0.1"
      : window.location.hostname;

  return (
    <ServerHostnameContext.Provider value={serverUrl}>
      {children}
    </ServerHostnameContext.Provider>
  );
};
