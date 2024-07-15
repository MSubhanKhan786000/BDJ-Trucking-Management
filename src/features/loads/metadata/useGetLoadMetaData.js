import { useGetAllCustomers } from "../../customers/list/useGetAllCustomers";
import { useGetAllDispatchZones } from "features/dispatch-zones/useGetAllDispatchZones";
import { useGetAllFinalDeliveryStops } from "features/final-delivery-stop/useGetAllFinalDeliveryStops";
import { useGetAllInitialPickupStops } from "features/initial-pickup-stop/useGetAllInitialPickupStops";
import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";
import { boolean, number, object, string } from "yup";

export const useGetLoadMetaData = () => {
  const { data: customers, loading: customerLoading } = useGetAllCustomers();
  const { data: dispatchZones, loading: dispatchZoneLoading } =
    useGetAllDispatchZones();
  const { data: finalDeliveryStops, loading: finalDeliveryStopsLoading } =
    useGetAllFinalDeliveryStops();
  const { data: initialPickupStops, loading: initialPickupStopsLoading } =
    useGetAllInitialPickupStops();
  const loadType = [
    { label: "TRUCK LOAD", value: "truck_load" },
    { label: "INTERMODAL LOAD", value: "intermodal_load" },
    { label: "LTL LOAD", value: "ltl_load" },
    { label: "CAR HAUL LOAD", value: "car_haul_load" },
    { label: "HEAVY HAUL LOAD", value: "heavy_haul_load" },
    { label: "TANKER LOAD", value: "tanker_load" },
    { label: "AIR FREIGHT LOAD", value: "air_freight_load" },
  ];

  const commodities = [
    { label: "Consumer Goods", value: "consumer_goods" },
    { label: "Industrial Materials", value: "industrial_materials" },
    { label: "Agricultural Products", value: "agricultural_products" },
    { label: "Energy and Fuel", value: "energy_and_fuel" },
    {
      label: "Chemicals and Hazardous Materials",
      value: "chemicals_and_hazardous_materials",
    },
    {
      label: "Pharmaceuticals and Medical Supplies",
      value: "pharmaceuticals_and_medical_supplies",
    },
    { label: "Waste and Recycling", value: "waste_and_recycling" },
    { label: "Specialty Commodities", value: "specialty_commodities" },
  ];

  const quantityUnit = [
    { label: "Kg", value: "kg" },
    { label: "Units", value: "units" },
    { label: "Liters", value: "liters" },
  ];

  const packaging = [
    { label: "Sealed", value: "sealed" },
    { label: "Hazmat", value: "hazmat" },
    { label: "Custom-Cross border", value: "custom_cross_border" },
  ];

  const loadStatuses = [
    { label: "Booked", value: "Booked" },
    { label: "Scheduled", value: "Scheduled" },
    { label: "En-Route", value: "En-Route" },
    { label: "Delayed", value: "Delayed" },
  ];

  const loadFormFields = [
    {
      name: "type",
      type: "select",
      placeholder: "Select Type",
      label: "Type",
      isRequired: false,
      options: loadType,
    },
    {
      name: "dispatch_zone",
      type: "select",
      placeholder: "Select Dispatch Zone",
      label: "Dispatch Zone",
      isRequired: false,
      options: dispatchZones?.map((dispatchZone) => ({
        label: dispatchZone.name,
        value: dispatchZone.id,
      })),
    },
    {
      name: "customer",
      type: "select",
      placeholder: "Select Customer",
      label: "Customer",
      isRequired: true,
      options: customers?.map((customer) => ({
        label: customer.name,
        value: customer.id,
      })),
    },
    {
      name: "weight",
      type: "text",
      placeholder: "Enter Weight",
      label: "Weight",
      isRequired: true,
    },
    {
      name: "commodity",
      type: "select",
      placeholder: "Select Commodity",
      label: "Commodity",
      isRequired: false,
      options: commodities,
    },
    {
      name: "quantity_value",
      type: "number",
      placeholder: "Enter Quantity Value",
      label: "Quantity Value",
      isRequired: false,
    },
    {
      name: "quantity_unit",
      type: "select",
      placeholder: "Select Quantity Unit",
      label: "Quantity Unit",
      isRequired: false,
      options: quantityUnit,
    },
    {
      name: "packaging",
      type: "select",
      placeholder: "Select Packaging",
      label: "Packaging",
      isRequired: false,
      options: packaging,
    },
    {
      name: "booked_by",
      type: "text",
      placeholder: "Enter Booked By",
      label: "Booked By",
      isRequired: false,
    },
    {
      name: "status",
      type: "select",
      placeholder: "Select Status",
      label: "Status",
      isRequired: false,
      options: loadStatuses,
    },
    {
      name: "initial_pickup_stop",
      type: "select",
      placeholder: "Select Initial Pickup Stop",
      label: "Initial Pickup Stop",
      isRequired: true,
      options: initialPickupStops?.map((initialPickupStop) => ({
        label: initialPickupStop.bol,
        value: initialPickupStop.id,
      })),
    },
    {
      name: "final_delivery_stop",
      type: "select",
      placeholder: "Select Final Delivery Stop",
      label: "Final Delivery Stop",
      isRequired: true,
      options: finalDeliveryStops?.map((finalDeliveryStop) => ({
        label: finalDeliveryStop.city,
        value: finalDeliveryStop.id,
      })),
    },
    // {
    //   name: "is_deleted",
    //   type: "checkbox",
    //   placeholder: "Is Deleted",
    //   label: "Is Deleted",
    //   isRequired: false,
    // },
    {
      name: "is_active",
      type: "checkbox",
      placeholder: "Is Active",
      label: "Is Active",
      isRequired: false,
    },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const loadSchema = generateSchema(loadFormFields);

  const loadSchemaGroups = [];
  return {
    loadFormFields,
    loadSchema,
    isLoading:
      customerLoading ||
      dispatchZoneLoading ||
      finalDeliveryStopsLoading ||
      initialPickupStopsLoading,
    loadSchemaGroups,
  };
  // return {
  //   commodities,
  //   loadType,
  //   packaging,
  //   quantityUnit,
  //   loadStatuses,
  //   customers,
  //   dispatchZones,
  //   dispatchZoneLoading,
  //   finalDeliveryStops,
  //   initialPickupStops,
  //   customerLoading,
  //   finalDeliveryStopsLoading,
  //   initialPickupStopsLoading,
  // };
};
