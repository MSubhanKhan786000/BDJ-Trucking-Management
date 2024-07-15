import { useGetAllService } from "service/useGetAllService";

export const useGetAllFinalDeliveryStops = () => {
  const { data, error, loading } = useGetAllService({
    route: "/stops/final-delivery-stops/",
  });

  return { data, error, loading };
};
