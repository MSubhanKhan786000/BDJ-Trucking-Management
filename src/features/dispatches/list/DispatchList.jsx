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
import { useDispatchList } from "./useDispatchList";
import ReactTable from "components/ReactTable/ReactTable.js";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "components/ConfirmationModal/ConfirmationModal";

export const DispatchList = () => {
  const {
    data,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    setSelectedDispatchId,
    deleteDispatch,
  } = useDispatchList();
  const navigate = useNavigate();


  return (
    <>
      {!loading && (
        <div className="content">
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader className="listing-card-header">
                  <CardTitle tag="h4">Dispatches</CardTitle>
                  <Button onClick={() => navigate("/admin/dispatches/create")}>
                    Add Dispatch
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
                        Header: "Load Status",
                        accessor: "load_status",
                      },
                      {
                        Header: "Driver 1",
                        accessor: "driver1",
                      },
                      {
                        Header: "Driver 2",
                        accessor: "driver2",
                      },
                      {
                        Header: "Truck",
                        accessor: "truck",
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
                                  `/admin/dispatches/edit/${row?.original?.id}`
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
                                setSelectedDispatchId(row?.original?.id);
                                toggleConfirmationModal();
                              }}
                            >
                              <i className="tim-icons icon-simple-remove" />
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
            onConfirm={deleteDispatch}
            resourceType="Dispatch"
          />
        </div>
      )}
    </>
  );
};
