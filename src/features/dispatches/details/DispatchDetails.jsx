import React, { useCallback, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./DispatchDetails.css";
import ReactSearchBox from "react-search-box";

function DispatchDetails() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Allison Schmitt",
      age: 22,
      country: "United States",
      year: 2012,
      date: "12/08/2012",
      sport: "Swimming",
      gold: 3,
      silver: 1,
      bronze: 1,
      total: 5,
    },
    {
      athlete: "Natalie Coughlin",
      age: 21,
      country: "United States",
      year: 2004,
      date: "29/08/2004",
      sport: "Swimming",
      gold: 2,
      silver: 2,
      bronze: 1,
      total: 5,
    },
  ]);

  const columns = [
    { headerName: "Athlete", field: "athlete", filter: "agTextColumnFilter" },
    { headerName: "Age", field: "age", filter: "agTextColumnFilter" },
    { headerName: "Country", field: "country", filter: "agTextColumnFilter" },
    { headerName: "Year", field: "year", filter: "agTextColumnFilter" },
    { headerName: "Date", field: "date", filter: "agTextColumnFilter" },
    { headerName: "Sport", field: "sport", filter: "agTextColumnFilter" },
    { headerName: "Gold", field: "gold", filter: "agTextColumnFilter" },
    { headerName: "Silver", field: "silver", filter: "agTextColumnFilter" },
    { headerName: "Bronze", field: "bronze", filter: "agTextColumnFilter" },
    { headerName: "Total", field: "total", filter: "agTextColumnFilter" },
  ];
  const defaultColDefs = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    tooltipField: "make",
  };

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

  const rowSelectionType = "multiple";
  const onSelectionChanged = event => {
    console.log(event.api.getSelectedRows());
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
          height: 450,
          marginLeft: "1%",
          marginTop: "10px",
          marginRight: "20px",
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          onGridReady={onGridReady}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
    </div>
  );
}

export default DispatchDetails;
