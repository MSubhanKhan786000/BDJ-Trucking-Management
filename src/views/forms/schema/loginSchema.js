import { string, object } from "yup";

export const loginFormfields = [
  { name: "username", placeholder: "Username", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];

export const loginSchema = object().shape({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});
