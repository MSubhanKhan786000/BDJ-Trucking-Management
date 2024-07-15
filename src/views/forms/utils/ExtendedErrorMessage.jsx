import React from "react";
import { Alert } from "reactstrap";

export const ExtendedErrorMessage = (props) => {
  const { errors, field } = props;

  return <Alert color="danger">{errors[field]?.message}</Alert>;
};
