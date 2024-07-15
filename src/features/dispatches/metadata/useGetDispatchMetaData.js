import { useGetAllDrivers } from "../../drivers/list/useGetAllDrivers";
import { useGetAllTrucks } from "../../trucks/list/useGetAllTrucks";
import { useGetAllLoads } from "../../loads/list/useGetAllLoads";
import { useGenerateEntitySchema } from "utils/forms/useGenerateEntitySchema";

export const useGetDispatchMetaData = () => {
  const { data: drivers, loading: driverLoading } = useGetAllDrivers();
  const { data: trucks, loading: truckLoading } = useGetAllTrucks();
  const { data: loads, loading: loadLoading } = useGetAllLoads();
  const billingStatuses = [
    { label: "Load Invoiced", value: "load_invoiced" },
    { label: "TONU", value: "tonu" },
    { label: "Cancelled", value: "cancelled" },
  ];

  const dispatchFormFields = [
    {
      name: "freight_rate",
      type: "number",
      placeholder: "Enter Freight Rate",
      label: "Freight Rate",
      isRequired: true,
    },
    {
      name: "invoice_amount",
      type: "number",
      placeholder: "Enter Invoice Amount",
      label: "Invoice Amount",
      isRequired: true,
    },
    {
      name: "billing_status",
      type: "select",
      placeholder: "Enter Billing Status",
      label: "Billing Status",
      isRequired: false,
      options: billingStatuses,
    },
    {
      name: "invoice_balance",
      type: "number",
      placeholder: "Enter Invoice Balance",
      label: "Invoice Balance",
      isRequired: true,
    },
    {
      name: "load",
      type: "select",
      placeholder: "Enter Load",
      label: "Load",
      isRequired: true,
      options: loads?.map((load) => ({
        label: load.type,
        value: load.id,
      })),
    },
    {
      name: "truck",
      type: "select",
      placeholder: "Enter Truck",
      label: "Truck",
      isRequired: true,
      options: trucks?.map((truck) => ({
        label: truck.plates_number,
        value: truck.id,
      })),
    },
    {
      name: "driver1",
      type: "select",
      placeholder: "Enter Driver1",
      label: "Driver1",
      isRequired: true,
      options: drivers?.map((driver) => ({
        label: driver.display_name,
        value: driver.id,
      })),
    },
    {
      name: "driver2",
      type: "select",
      placeholder: "Enter Driver2",
      label: "Driver2",
      isRequired: true,
      options: drivers?.map((driver) => ({
        label: driver.display_name,
        value: driver.id,
      })),
    },
    {
      name: "scheduled_origin_departure_datetime",
      type: "datetime",
      placeholder: "Enter Scheduled Origin Departure",
      label: "Scheduled Origin Departure",
      isRequired: true,
    },
    {
      name: "scheduled_destination_arrival_datetime",
      type: "datetime",
      placeholder: "Enter Scheduled Destination Arrival",
      label: "Scheduled Destination Arrival",
      isRequired: true,
    },
    {
      name: "origin_destination_miles",
      type: "number",
      placeholder: "Enter Origin Destination Miles",
      label: "Origin_Destination_Miles",
      isRequired: true,
    },
    {
      name: "departure_city",
      type: "text",
      placeholder: "Enter Departure City",
      label: "Departure City",
      isRequired: true,
    },
    {
      name: "departure_state",
      type: "text",
      placeholder: "Enter Departure State",
      label: "Departure State",
      isRequired: true,
    },
    {
      name: "destination_city",
      type: "text",
      placeholder: "Enter Destination City",
      label: "Destination City",
      isRequired: true,
    },
    {
      name: "destination_state",
      type: "text",
      placeholder: "Enter Destination State",
      label: "Destination State",
      isRequired: true,
    },
    {
      name: "overall_trip_miles",
      type: "number",
      placeholder: "Enter Overall Trip Miles",
      label: "Overall Trip Miles",
      isRequired: true,
    },

    {
      name: "expense_pay_split",
      type: "checkbox",
      placeholder: "Expense Pay Split",
    },
    // {name: "is_deleted", type: "checkbox", placeholder: "Is Deleted"},
    { name: "is_active", type: "checkbox", placeholder: "Is Active" },
  ];

  const { generateSchema } = useGenerateEntitySchema();

  const dispatchSchema = generateSchema(dispatchFormFields);

  // const dispatchSchema = object().shape({
  //   is_active: boolean(),
  //   is_deleted: boolean(),
  //   load: string(),
  //   truck: string(),
  //   driver1: string(),
  //   driver2: string(),
  //   freight_rate: number(),
  //   invoice_amount: number(),
  //   billing_status: string(),
  //   invoice_balance: number(),
  //   expense_pay_split: boolean(),
  //   scheduled_origin_departure_datetime: date(),
  //   scheduled_destination_arrival_datetime: date(),
  //   origin_destination_miles: number(),
  //   departure_city: string(),
  //   departure_state: string(),
  //   destination_city: string(),
  //   destination_state: string(),
  //   overall_trip_miles: number(),
  // });
  const dispatchSchemaGroups = [];

  return {
    dispatchFormFields,
    dispatchSchema,
    drivers,
    trucks,
    driverLoading,
    truckLoading,
    dispatchSchemaGroups,
  };
};
