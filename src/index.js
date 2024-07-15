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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.js";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import { AuthProvider } from "./layouts/Auth/auth-context/AuthProvider";
import { FormStateProvider } from "components/Forms/form-context/FormStateProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/black-dashboard-pro-react.scss?v=1.2.0";
import "assets/demo/demo.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <FormStateProvider>
        <Routes>
          <Route path="/auth/*" element={<AuthLayout />} />

          <Route path="/admin/*" element={<AdminLayout />} />

          <Route path="/rtl/*" element={<RTLLayout />} />

          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
        <ToastContainer />
      </FormStateProvider>
    </AuthProvider>
  </BrowserRouter>
);
