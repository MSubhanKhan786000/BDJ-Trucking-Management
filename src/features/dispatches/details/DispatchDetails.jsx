import React, { useCallback, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./DispatchDetails.css";
import ReactSearchBox from "react-search-box";
import { useDispatchList } from "../list/useDispatchList";
import isEqual from 'lodash/isEqual';

function DispatchDetails() {

  const {data} = useDispatchList();

  // console.log("Dispatch All Data: ",data);

  const [rowData, setRowData] = useState([]);
    
  useEffect(() => {
    if (data && !isEqual(data, rowData)) {
      setRowData(data);
    }
  }, [data, rowData]);

  const [gridApi, setGridApi] = useState(null);

  const columns = [
    { headerName: "ID", field: "id", filter: "agTextColumnFilter" },
    { headerName: "Freight Rate", field: "freight_rate", filter: "agTextColumnFilter" },
    { headerName: "Invoice Amount", field: "invoice_amount", filter: "agTextColumnFilter" },
    { headerName: "Billing Status", field: "billing_status", filter: "agTextColumnFilter" },
    { headerName: "Invoice Balance", field: "invoice_balance", filter: "agTextColumnFilter" },
    { headerName: "Load", field: "load.status", filter: "agTextColumnFilter" },
    { headerName: "Truck", field: "truck", filter: "agTextColumnFilter" },
    { headerName: "Driver1", field: "driver1", filter: "agTextColumnFilter" },
    { headerName: "Driver2", field: "driver2", filter: "agTextColumnFilter" },
    { headerName: "Scheduled Origin Departure", field: "scheduled_origin_departure_datetime", filter: "agTextColumnFilter" },
    { headerName: "Scheduled Destination Arrival", field: "scheduled_destination_arrival_datetime", filter: "agTextColumnFilter" },
    { headerName: "Origin_Destination_Miles", field: "origin_destination_miles", filter: "agTextColumnFilter" },
    { headerName: "Departure City", field: "departure_city", filter: "agTextColumnFilter" },
    { headerName: "Departure State", field: "departure_state", filter: "agTextColumnFilter" },
    { headerName: "Destination City", field: "destination_city", filter: "agTextColumnFilter" },
    { headerName: "Destination State", field: "destination_state", filter: "agTextColumnFilter" },
    { headerName: "Overall Trip Miles", field: "overall_trip_miles", filter: "agTextColumnFilter" },
  ];

  const onGridReady = useCallback(params => {
    setGridApi(params.api);
  }, []);


  const onExportClick = () => {
    if (gridApi) {
      gridApi.exportDataAsCsv();
    } else {
      console.error("Grid API is not set.");
    }
  };


  const onFilterTextChange = e => {
    if (gridApi) {
      gridApi.setQuickFilter(e.target.value);
    }
  };

  return (
    <div className="main-container">
      <p className="header">Dispatch</p>
      <div className="search-export-container">
        <input
          type="Search"
          placeholder="Search Dispatch Info"
          className="styled-search-box"
          onChange={onFilterTextChange}
        />

        <button className="my-button" onClick={onExportClick}>
          <img
            src={require("../../../assets/img/xls.png")}
            alt="Excel Icon"
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          Export As CSV
        </button>
      </div>
      <div
        className="ag-theme-quartz"
        style={{
          height: 430,
          marginLeft: "1%",
          marginTop: "10px",
          paddingBottom: "10px",
          marginRight: "20px",
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          onGridReady={onGridReady}
          pagination={true}
          paginationAutoPageSize={true}
          // paginationPageSize={10}
        />
      </div>
    </div>
  );
}

export default DispatchDetails;
