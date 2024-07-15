import { useGetLoadMetaData } from "../metadata/useGetLoadMetaData";

export const useEditLoadSchema = () => {
  const {
    commodities,
    loadType,
    packaging,
    quantityUnit,
    loadStatuses,
    customerLoading,
    customers,
    dispatchZoneLoading,
    dispatchZones,
    finalDeliveryStops,
    finalDeliveryStopsLoading,
    initialPickupStops,
    initialPickupStopsLoading,
    loadSchema,
    loadFormFields,
  } = useGetLoadMetaData();

  // const editLoadFormFields = [
  //   {
  //     name: "type",
  //     type: "select",
  //     placeholder: "Select Type",
  //     label: "Type",
  //     isRequired: false,
  //     options: loadType,
  //   },
  //   {
  //     name: "dispatch_zone",
  //     type: "select",
  //     placeholder: "Select Dispatch Zone",
  //     label: "Dispatch Zone",
  //     isRequired: false,
  //     options: dispatchZones?.map((dispatchZone) => ({
  //       label: dispatchZone.name,
  //       value: dispatchZone.id,
  //     })),
  //   },
  //   {
  //     name: "customer",
  //     type: "select",
  //     placeholder: "Select Customer",
  //     label: "Customer",
  //     isRequired: true,
  //     options: customers?.map((customer) => ({
  //       label: customer.name,
  //       value: customer.id,
  //     })),
  //   },
  //   {
  //     name: "weight",
  //     type: "text",
  //     placeholder: "Enter Weight",
  //     label: "Weight",
  //     isRequired: true,
  //   },
  //   {
  //     name: "commodity",
  //     type: "select",
  //     placeholder: "Select Commodity",
  //     label: "Commodity",
  //     isRequired: false,
  //     options: commodities,
  //   },
  //   {
  //     name: "quantity_value",
  //     type: "number",
  //     placeholder: "Enter Quantity Value",
  //     label: "Quantity Value",
  //     isRequired: false,
  //   },
  //   {
  //     name: "quantity_unit",
  //     type: "select",
  //     placeholder: "Select Quantity Unit",
  //     label: "Quantity Unit",
  //     isRequired: false,
  //     options: quantityUnit,
  //   },
  //   {
  //     name: "packaging",
  //     type: "select",
  //     placeholder: "Select Packaging",
  //     label: "Packaging",
  //     isRequired: false,
  //     options: packaging,
  //   },
  //   {
  //     name: "booked_by",
  //     type: "text",
  //     placeholder: "Enter Booked By",
  //     label: "Booked By",
  //     isRequired: false,
  //   },
  //   {
  //     name: "status",
  //     type: "select",
  //     placeholder: "Select Status",
  //     label: "Status",
  //     isRequired: false,
  //     options: loadStatuses,
  //   },
  //   {
  //     name: "initial_pickup_stop",
  //     type: "select",
  //     placeholder: "Select Initial Pickup Stop",
  //     label: "Initial Pickup Stop",
  //     isRequired: true,
  //     options: initialPickupStops?.map((initialPickupStop) => ({
  //       label: initialPickupStop.bol,
  //       value: initialPickupStop.id,
  //     })),
  //   },
  //   {
  //     name: "final_delivery_stop",
  //     type: "select",
  //     placeholder: "Select Final Delivery Stop",
  //     label: "Final Delivery Stop",
  //     isRequired: true,
  //     options: finalDeliveryStops?.map((finalDeliveryStop) => ({
  //       label: finalDeliveryStop.city,
  //       value: finalDeliveryStop.id,
  //     })),
  //   },
  //   {
  //     name: "is_deleted",
  //     type: "checkbox",
  //     placeholder: "Is Deleted",
  //     label: "Is Deleted",
  //     isRequired: false,
  //   },
  //   {
  //     name: "is_active",
  //     type: "checkbox",
  //     placeholder: "Is Active",
  //     label: "Is Active",
  //     isRequired: false,
  //   },
  // ];

  const editLoadSchema = loadSchema;

  return {
    editLoadFormFields: loadFormFields,
    editLoadSchema,
    isLoading:
      customerLoading ||
      dispatchZoneLoading ||
      finalDeliveryStopsLoading ||
      initialPickupStopsLoading,
  };
};
