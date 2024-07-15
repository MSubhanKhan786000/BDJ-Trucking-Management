import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { useTruckList } from "./useTruckList";
import ReactTable from "components/ReactTable/ReactTable.js";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "components/ConfirmationModal/ConfirmationModal";
import { EntityViewModal } from "components/ConfirmationModal/EntityViewModal";
import { useGetAllTruckDocuments } from "../truck-documents/useGetAllTruckDocuments";

export const TruckList = () => {
  const {
    data,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    setSelectedTruckId,
    deleteTruck,
    truckFormFields,
    isEntityModalOpen,
    toggleEntityModal,
    selectedTruckId,
  } = useTruckList();

  const {
    sendRequest: getAllTruckDocuments,
    data: truckDocuments,
    loading: isTruckDocumentLoading,
  } = useGetAllTruckDocuments(selectedTruckId, true);

  const navigate = useNavigate();

  return (
    <>
      {!loading && (
        <div className="content">
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader className="listing-card-header">
                  <CardTitle tag="h4">Trucks</CardTitle>
                  <Button onClick={() => navigate("/admin/trucks/create")}>
                    Add Truck
                  </Button>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={data}
                    filterable
                    resizable={false}
                    columns={[
                      {
                        Header: "Sr No.",
                        accessor: (row, index) => index + 1,
                      },
                      {
                        Header: "Unit Number",
                        accessor: "unit_number",
                      },
                      {
                        Header: "Truck Type",
                        accessor: "truck_type",
                      },
                      {
                        Header: "ake",
                        accessor: "make",
                      },
                      {
                        Header: "Model",
                        accessor: "model",
                      },
                      {
                        Header: "Year",
                        accessor: "year",
                      },
                      {
                        Header: "Plates Number",
                        accessor: "plates_number",
                      },
                      {
                        Header: "Color",
                        accessor: "color",
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false,
                        Cell: ({ row }) => (
                          <div className="actions-right">
                            <Button
                              className="btn-link btn-icon"
                              color="success"
                              id="tooltip324367706"
                              size="sm"
                              onClick={() => {
                                navigate(
                                  `/admin/trucks/edit/${row?.original?.id}`
                                );
                              }}
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <Button
                              className="btn-link"
                              color="danger"
                              id="tooltip974171201"
                              size="sm"
                              onClick={() => {
                                setSelectedTruckId(row?.original?.id);
                                toggleConfirmationModal();
                              }}
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                            <Button
                              className="btn-link"
                              color="info"
                              id="tooltip974171201"
                              size="sm"
                              onClick={() => {
                                navigate(
                                  `/admin/trucks/create/duplicate/${row?.original?.id}`
                                );
                              }}
                            >
                              <i className="tim-icons icon-single-copy-04" />
                            </Button>
                            <Button
                              className="btn-link"
                              color="warn"
                              id="tooltip974171201"
                              size="sm"
                              onClick={() => {
                                setSelectedTruckId(row?.original?.id);
                                toggleEntityModal();
                              }}
                            >
                              <i className="tim-icons icon-double-right" />
                            </Button>
                          </div>
                        ),
                      },
                    ]}
                    defaultPageSize={10}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ConfirmationModal
            isOpen={isConfirmationModalOpen}
            toggle={toggleConfirmationModal}
            onConfirm={deleteTruck}
            resourceType="Truck"
          />
          <EntityViewModal
            resourceType="Truck"
            isOpen={isEntityModalOpen}
            toggle={toggleEntityModal}
            formfields={truckFormFields}
            entityId={selectedTruckId}
            getAllDocuments={getAllTruckDocuments}
            documents={truckDocuments}
            isLoading={isTruckDocumentLoading}
            initialValue={data?.find(
              (truck) => truck.id === selectedTruckId
            )}
          />
        </div>
      )}
    </>
  );
};
