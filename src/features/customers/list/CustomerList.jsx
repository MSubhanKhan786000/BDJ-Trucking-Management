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
import { useCustomerList } from "./useCustomerList";
import ReactTable from "components/ReactTable/ReactTable.js";
import { useNavigate } from "react-router-dom";
import { ConfirmationModal } from "components/ConfirmationModal/ConfirmationModal";
import { EntityViewModal } from "components/ConfirmationModal/EntityViewModal";

export const CustomerList = () => {
  const {
    data,
    loading,
    toggleConfirmationModal,
    isConfirmationModalOpen,
    setSelectedCustomerId,
    deleteCustomer,
    isEntityModalOpen,
    toggleEntityModal,
    customerFormFields,
    selectedCustomerId,
  } = useCustomerList();
  const navigate = useNavigate();

  return (
    <>
      {!loading && (
        <div className="content">
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader className="listing-card-header">
                  <CardTitle tag="h4">Customers</CardTitle>
                  <div>
                    <Button onClick={() => navigate("/admin/customers/create")}>
                      Add Customer
                    </Button>
                    <Button onClick={() => navigate("/admin/address/create")}>
                      Add Address
                    </Button>
                  </div>
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
                        accessor: "short_name",
                      },
                      {
                        Header: "Phone",
                        accessor: "local_phone",
                      },
                      {
                        Header: "E-mail",
                        accessor: "email",
                      },
                      {
                        Header: "Address",
                        accessor: "physical_address.location",
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
                                  `/admin/customers/edit/${row?.original?.id}`
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
                                setSelectedCustomerId(row?.original?.id);
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
                                  `/admin/customers/create/duplicate/${row?.original?.id}`
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
                                setSelectedCustomerId(row?.original?.id);
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
            onConfirm={deleteCustomer}
            resourceType="Customer"
          />
          <EntityViewModal
            resourceType="Customer"
            isOpen={isEntityModalOpen}
            toggle={toggleEntityModal}
            formfields={customerFormFields}
            entityId={selectedCustomerId}
            initialValue={data?.find(
              (driver) => driver.id === selectedCustomerId
            )}
          />
        </div>
      )}
    </>
  );
};
