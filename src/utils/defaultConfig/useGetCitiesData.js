import { useFormState } from "react-hook-form";
import { statesData } from "./statesData";
import { useMemo } from "react";

export const useGetCitiesData = () => {
  const { usaState } = useFormState();

  const cities = useMemo(() => {
    const state = statesData.find((state) => state.code === usaState);
    return state ? state.cities : [];
  }, [usaState]);

  return { cities };
};
