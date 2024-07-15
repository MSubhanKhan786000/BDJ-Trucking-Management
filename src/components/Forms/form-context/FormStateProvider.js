import React, { createContext, useState } from "react";

export const FormStateContext = createContext("");

export const FormStateProvider = (props) => {
  const { children } = props;

  const [usaState, setUsaState] = useState(1);

  return (
    <FormStateContext.Provider value={{ usaState, setUsaState }}>
      {children}
    </FormStateContext.Provider>
  );
};
