import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuthentication = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthentication must be used within AuthProvider");
  }

  return context;
};
