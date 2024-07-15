/* eslint-disable jsx-a11y/anchor-is-valid */
/*!

=========================================================
* Black Dashboard PRO React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";
import { DevTool } from "@hookform/devtools";
import { ExtendedErrorMessage } from "../forms/utils/ExtendedErrorMessage";
import { loginFormfields } from "../forms/schema/loginSchema";
import { useLoginUser } from "views/hooks/useLoginUser";
import { ExtendedErrorAlert } from "views/forms/utils/ExtendedErrorAlert";
import logo from "assets/img/bdj-logo.png";

const Login = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    control,
    notificationAlertRef,
  } = useLoginUser();

  return (
    <>
      <div className="content">
        <Container>
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
              <Card className="card-login card-white">
                <CardHeader className="custom-card-header">
                  <CardTitle>
                    <Row className="logo-overlay">
                      <img src={logo} alt="Logo" className="logo" />
                    </Row>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {loginFormfields.map((field, index) => (
                    <>
                      <InputGroup
                        className="custom-login-input-group"
                        key={index}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className="custom-login-input-group-text">
                            {field.name === "username" ? (
                              <i className="tim-icons icon-single-02" />
                            ) : (
                              <i className="tim-icons icon-lock-circle" />
                            )}
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          className="custom-login-input"
                          placeholder={field.placeholder}
                          type={field.type}
                          name={field.name}
                          autoComplete="off"
                          {...register(field.name, { required: true })}
                        />
                      </InputGroup>
                      {errors[field.name] && (
                        <ExtendedErrorMessage
                          errors={errors}
                          field={field.name}
                        />
                      )}
                    </>
                  ))}
                </CardBody>
                <CardFooter>
                  <Button block className="mb-3" color="info" size="lg">
                    Login
                  </Button>
                  {/*<div className="pull-left">*/}
                  {/*  <h6>*/}
                  {/*    <a*/}
                  {/*      className="link footer-link custom-login-helper-links"*/}
                  {/*      onClick={(e) => e.preventDefault()}*/}
                  {/*    >*/}
                  {/*      Create Account*/}
                  {/*    </a>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  {/*<div className="pull-right">*/}
                  {/*  <h6>*/}
                  {/*    <a*/}
                  {/*      className="link footer-link custom-login-helper-links"*/}
                  {/*      onClick={(e) => e.preventDefault()}*/}
                  {/*    >*/}
                  {/*      Need Help?*/}
                  {/*    </a>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                </CardFooter>
              </Card>
            </Form>
            {/*<DevTool control={control} />*/}
            <ExtendedErrorAlert notificationAlertRef={notificationAlertRef} />
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
