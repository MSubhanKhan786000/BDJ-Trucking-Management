import { useContext } from "react";
import { FormStateContext } from "./FormStateProvider";

export const useFormState = () => {
  const context = useContext(FormStateContext);

  if (context === undefined) {
    throw new Error("useFormState must be used within AuthProvider");
  }

  return context;
};
