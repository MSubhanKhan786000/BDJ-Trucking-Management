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
import { useDriverList } from "./useDriverList";
import ReactTable from "components/ReactTable/ReactTable.js";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "components/ConfirmationModal/ConfirmationModal";
import { EntityViewModal } from "components/ConfirmationModal/EntityViewModal";
import { useGetAllDriverDocuments } from "../driver-documents/useGetAllDriverDocuments";

export const DriverList = () => {
  const {
    data,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    setSelectedDriverId,
    deleteDriver,
    driverFormFields,
    isEntityModalOpen,
    toggleEntityModal,
    selectedDriverId,
  } = useDriverList();

  const {
    sendRequest: getAllDriverDocuments,
    data: driverDocuments,
    loading: isDriverDocumentLoading,
  } = useGetAllDriverDocuments(selectedDriverId, true);

  const navigate = useNavigate();

  return (
    <>
      {!loading && (
        <div className="content">
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader className="listing-card-header">
                  <CardTitle tag="h4">Drivers</CardTitle>
                  <Button onClick={() => navigate("/admin/drivers/create")}>
                    Add Driver
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
                        Header: "Name",
                        accessor: "display_name",
                      },
                      {
                        Header: "Cell Phone",
                        accessor: "cell_phone",
                      },
                      {
                        Header: "Dispatch Category",
                        accessor: "dispatch_category",
                      },
                      {
                        Header: "Experience",
                        accessor: "years_of_experience",
                      },
                      {
                        Header: "Status",
                        accessor: "status",
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
                                  `/admin/drivers/edit/${row?.original?.id}`
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
                                setSelectedDriverId(row?.original?.id);
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
                                  `/admin/drivers/create/duplicate/${row?.original?.id}`
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
                                setSelectedDriverId(row?.original?.id);
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
            onConfirm={deleteDriver}
            resourceType="Driver"
          />
          <EntityViewModal
            resourceType="Driver"
            isOpen={isEntityModalOpen}
            toggle={toggleEntityModal}
            formfields={driverFormFields}
            entityId={selectedDriverId}
            getAllDocuments={getAllDriverDocuments}
            documents={driverDocuments}
            isLoading={isDriverDocumentLoading}
            initialValue={data?.find(
              (driver) => driver.id === selectedDriverId
            )}
          />
        </div>
      )}
    </>
  );
};
