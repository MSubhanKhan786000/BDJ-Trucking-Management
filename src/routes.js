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
import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/ReactTables.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import RegularForms from "views/forms/RegularForms.js";
import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";
import Pricing from "views/pages/Pricing.js";
import Register from "views/pages/Register.js";
import Timeline from "views/pages/Timeline.js";
import User from "views/pages/User.js";
import Login from "views/pages/Login.js";
import Rtl from "views/pages/Rtl.js";
import Lock from "views/pages/Lock.js";
import { LoadList } from "features/loads/list/LoadList";
import { CreateLoadForm } from "features/loads/create/CreateLoadForm";
import { EditLoadForm } from "features/loads/edit/EditLoadForm";
import { CustomerList } from "./features/customers/list/CustomerList";
import { CreateCustomerForm } from "./features/customers/create/CreateCustomerForm";
import { EditCustomerForm } from "./features/customers/edit/EditCustomerForm";
import { UserList } from "./features/users/list/UserList";
import { TruckList } from "./features/trucks/list/TruckList";
import { DriverList } from "./features/drivers/list/DriverList";
import { DispatchList } from "./features/dispatches/list/DispatchList";
import { CreateDriverForm } from "./features/drivers/create/CreateDriverForm";
import { CreateTruckForm } from "./features/trucks/create/CreateTruckForm";
import { EditDriverForm } from "./features/drivers/edit/EditDriverForm";
import { CreateDispatchForm } from "features/dispatches/create/CreateDispatchForm";
import { CreateUserForm } from "./features/users/create/CreateUserForm";
import { EditUserForm } from "./features/users/edit/EditUserForm";
import { EditTruckForm } from "./features/trucks/edit/EditTruckForm";
import { EditDispatchForm } from "./features/dispatches/edit/EditDispatchForm";
import { CreateDuplicateDriverForm } from "features/drivers/duplicate/CreateDuplicateDriverForm";
import { CreateDuplicateTruckForm } from "./features/trucks/duplicate/CreateDuplicateTruckForm";
import { CreateDuplicateCustomerForm } from "features/customers/duplicate/CreateDuplicateCustomerForm";
import { CreateAddressForm } from "features/customers/addresses/create/CreateAddressForm";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    mini: "I",
    rtlMini: "و",
    component: <Icons />,
    layout: "/admin",
  },
  // {
  //   collapse: true,
  //   name: "Forms",
  //   rtlName: "إستمارات",
  //   icon: "tim-icons icon-notes",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/regular-forms",
  //       name: "Regular Forms",
  //       rtlName: "أشكال عادية",
  //       mini: "RF",
  //       rtlMini: "صو",
  //       component: <RegularForms />,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/extended-forms",
  //       name: "Extended Forms",
  //       rtlName: "نماذج موسعة",
  //       mini: "EF",
  //       rtlMini: "هوو",
  //       component: <ExtendedForms />,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/validation-forms",
  //       name: "Validation Forms",
  //       rtlName: "نماذج التحقق من الصحة",
  //       mini: "VF",
  //       rtlMini: "تو",
  //       component: <ValidationForms />,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/wizard",
  //       name: "Wizard",
  //       rtlName: "ساحر",
  //       mini: "W",
  //       rtlMini: "ث",
  //       component: <Wizard />,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  // {
  //     collapse: true,
  //     name: "Tables",
  //     rtlName: "الجداول",
  //     icon: "tim-icons icon-puzzle-10",
  //     state: "tablesCollapse",
  //     views: [
  //         {
  //             path: "/regular-tables",
  //             name: "Regular Tables",
  //             rtlName: "طاولات عادية",
  //             mini: "RT",
  //             rtlMini: "صر",
  //             component: <RegularTables/>,
  //             layout: "/admin",
  //         },
  //         {
  //             path: "/extended-tables",
  //             name: "Extended Tables",
  //             rtlName: "جداول ممتدة",
  //             mini: "ET",
  //             rtlMini: "هور",
  //             component: <ExtendedTables/>,
  //             layout: "/admin",
  //         },
  //         {
  //             path: "/react-tables",
  //             name: "React Tables",
  //             rtlName: "رد فعل الطاولة",
  //             mini: "RT",
  //             rtlMini: "در",
  //             component: <ReactTables/>,
  //             layout: "/admin",
  //         },
  //     ],
  // },
  {
    path: "/loads/edit/:id",
    name: "Edit Load",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditLoadForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Loads",
    rtlName: "صفحات",
    icon: "tim-icons icon-app",
    state: "loadsCollapse",
    views: [
      {
        path: "/loads/create",
        name: "New Load",
        rtlName: "عالتسعير",
        mini: "NL",
        rtlMini: "ع",
        component: <CreateLoadForm />,
        layout: "/admin",
      },
      {
        path: "/loads",
        name: "Loads",
        rtlName: "عالتسعير",
        mini: "LL",
        rtlMini: "ع",
        component: <LoadList />,
        layout: "/admin",
      },
    ],
  },

  {
    path: "/customers/edit/:id",
    name: "Edit Customer",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditCustomerForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    path: "/customers/create/duplicate/:id",
    name: "Duplicate Customer",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <CreateDuplicateCustomerForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Customers",
    rtlName: "صفحات",
    icon: "tim-icons icon-single-02",
    state: "customersCollapse",
    views: [
      {
        path: "/customers/create",
        name: "New Customer",
        rtlName: "عالتسعير",
        mini: "NC",
        rtlMini: "ع",
        component: <CreateCustomerForm />,
        layout: "/admin",
      },
      {
        path: "/address/create",
        name: "New Address",
        rtlName: "عالتسعير",
        mini: "NC",
        rtlMini: "ع",
        component: <CreateAddressForm />,
        layout: "/admin",
      },
      {
        path: "/customers",
        name: "Customers",
        rtlName: "عالتسعير",
        mini: "CL",
        rtlMini: "ع",
        component: <CustomerList />,
        layout: "/admin",
      },
    ],
  },

  {
    path: "/users/edit/:id",
    name: "Edit User",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditUserForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Users",
    rtlName: "صفحات",
    icon: "tim-icons icon-badge",
    state: "usersCollapse",
    views: [
      {
        path: "/users/create",
        name: "New User",
        rtlName: "عالتسعير",
        mini: "NU",
        rtlMini: "ع",
        component: <CreateUserForm />,
        layout: "/admin",
      },
      {
        path: "/users",
        name: "Users",
        rtlName: "عالتسعير",
        mini: "UL",
        rtlMini: "ع",
        component: <UserList />,
        layout: "/admin",
      },
    ],
  },

  {
    path: "/trucks/edit/:id",
    name: "Edit Truck",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditTruckForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    path: "/trucks/create/duplicate/:id",
    name: "Edit Truck",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <CreateDuplicateTruckForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Trucks",
    rtlName: "صفحات",
    icon: "tim-icons icon-bus-front-12",
    state: "trucksCollapse",
    views: [
      {
        path: "/trucks/create",
        name: "New Truck",
        rtlName: "عالتسعير",
        mini: "TC",
        rtlMini: "ع",
        component: <CreateTruckForm />,
        layout: "/admin",
      },
      {
        path: "/trucks",
        name: "Trucks",
        rtlName: "عالتسعير",
        mini: "TL",
        rtlMini: "ع",
        component: <TruckList />,
        layout: "/admin",
      },
    ],
  },

  {
    path: "/drivers/edit/:id",
    name: "Edit Driver",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditDriverForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    path: "/drivers/create/duplicate/:id",
    name: "Edit Driver",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <CreateDuplicateDriverForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Drivers",
    rtlName: "صفحات",
    icon: "tim-icons icon-tie-bow",
    state: "driversCollapse",
    views: [
      {
        path: "/drivers/create",
        name: "New Driver",
        rtlName: "عالتسعير",
        mini: "ND",
        rtlMini: "ع",
        component: <CreateDriverForm />,
        layout: "/admin",
      },
      {
        path: "/drivers",
        name: "Drivers",
        rtlName: "عالتسعير",
        mini: "DL",
        rtlMini: "ع",
        component: <DriverList />,
        layout: "/admin",
      },
    ],
  },

  {
    path: "/dispatches/edit/:id",
    name: "Edit Dispatch",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    mini: "E",
    component: <EditDispatchForm />,
    layout: "/admin",
    redirect: true,
  },
  {
    collapse: true,
    name: "Dispatches",
    rtlName: "صفحات",
    icon: "tim-icons icon-delivery-fast",
    state: "dispatchesCollapse",
    views: [
      {
        path: "/dispatches/create",
        name: "New Dispatch",
        rtlName: "عالتسعير",
        mini: "ND",
        rtlMini: "ع",
        component: <CreateDispatchForm />,
        layout: "/admin",
      },
      {
        path: "/dispatches",
        name: "Dispatches",
        rtlName: "عالتسعير",
        mini: "DL",
        rtlMini: "ع",
        component: <DispatchList />,
        layout: "/admin",
      },
      {
        path: "/login",
        component: <Login />,
        layout: "/auth",
      },
    ],
  },
];

export default routes;
